import dayjs from "dayjs";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
register("ko_KR", koLocale);

export function formatAgo(date: string) {
  return format(date, "ko_KR");
}

export function formatWithDots(date: string) {
  const newDate = dayjs(date);
  return newDate.format("YYYY.MM.DD");
}
