import { siteConfig } from '../data/site';

export function affiliateUrl(utmCampaign?: string): string {
  const base = siteConfig.affiliateBase;
  return utmCampaign ? `${base}&utm_campaign=${utmCampaign}` : base;
}
