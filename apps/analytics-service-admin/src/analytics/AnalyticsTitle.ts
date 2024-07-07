import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "blogPostId";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.blogPostId?.toString() || String(record.id);
};
