import { siteConfig } from "@/config/site";

export function getBookingHref(serviceId?: string) {
  const base = siteConfig.bookingUrl.trim();

  if (base) {
    if (!serviceId) return base;
    const join = base.includes("?") ? "&" : "?";
    return `${base}${join}service=${encodeURIComponent(serviceId)}`;
  }

  return serviceId ? `#book?service=${encodeURIComponent(serviceId)}` : "#book";
}

export function hasExternalBooking() {
  return Boolean(siteConfig.bookingUrl.trim());
}
