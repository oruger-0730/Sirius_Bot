import type { Client } from "discord.js";
import { runServerDataSnapshot } from "@/utils/serverDataSnapshot";

/**
 * 毎日午前0時 (JST = UTC+9) にサーバーデータのスナップショットを保存するスケジューラー。
 *
 * - 起動時に「次の午前0時 JST まで」の待機時間を計算して setTimeout を設定。
 * - 初回実行後は setInterval(24h) でループする。
 */
export const scheduleMidnightServerSnapshot = (client: Client): void => {
	const msPerDay = 24 * 60 * 60 * 1000;

	/** 次の JST 午前0時まで何ミリ秒か計算する */
	const msUntilMidnightJst = (): number => {
		const now = new Date();

		// JST = UTC+9
		const jstOffsetMs = 9 * 60 * 60 * 1000;
		const nowJstMs = now.getTime() + jstOffsetMs;

		// JST での今日の経過ミリ秒（0:00:00 からの差）
		const elapsedTodayJstMs = nowJstMs % msPerDay;

		// 次の JST 午前0時まで
		const remaining = msPerDay - elapsedTodayJstMs;

		// 誤差が 1 秒以内なら 24 時間後に回す
		return remaining < 1000 ? msPerDay : remaining;
	};

	const run = async () => {
		console.log("[ServerSnapshot] 午前0時スナップショット実行");
		try {
			await runServerDataSnapshot(client);
		} catch (error) {
			console.error("[ServerSnapshot] スナップショット実行中にエラー", error);
		}
	};

	const scheduleNext = () => {
		const delay = msUntilMidnightJst();
		const nextMidnight = new Date(Date.now() + delay);
		console.log(
			`[ServerSnapshot] 次回実行予定: ${nextMidnight.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })} (${Math.round(delay / 1000 / 60)}分後)`,
		);

		setTimeout(async () => {
			await run();
			// 以降は 24 時間ごとに繰り返す
			setInterval(run, msPerDay);
		}, delay);
	};

	scheduleNext();
};
