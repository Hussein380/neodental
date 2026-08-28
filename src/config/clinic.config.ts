/**
 * NeoDental Clinic — Centralized Configuration & Single Source of Truth
 * 
 * Update clinic details here to instantly reflect across all components,
 * schemas, metadata, WhatsApp generators, and footers.
 */

export const CLINIC_CONFIG = {
  name: "NeoDental Clinic",
  shortName: "NeoDental",
  tagline: "Professional Dental Care & In-House Laboratory",
  domain: "https://neodentals.com",
  
  location: {
    address: "14th Street, 1st Avenue, Eastleigh, Nairobi, Kenya",
    shortAddress: "14th St, 1st Ave, Eastleigh",
    area: "Eastleigh",
    city: "Nairobi",
    country: "Kenya",
    coordinates: {
      latitude: -1.2778051,
      longitude: 36.8524021,
    },
    googleMapsLink: "https://maps.google.com/?q=14th+Street+1st+Avenue+Eastleigh+Nairobi+Kenya",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818454267232!2d36.8524021!3d-1.2778051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16d7a4628d05%3A0x8e833446059d29ff!2sEastleigh%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
  },

  contact: {
    primaryPhone: "0729 884 108",
    primaryPhoneTel: "+254729884108",
    secondaryPhone: "0721 284 884",
    secondaryPhoneTel: "+254721284884",
    whatsAppDigits: "254729884108",
  },

  hours: {
    display: "Monday — Sunday: 9:00 AM — 7:00 PM",
    shortDisplay: "Open Daily 9:00 AM – 7:00 PM",
    days: "Monday — Sunday (7 Days a Week)",
    timeRange: "9:00 AM — 7:00 PM",
    holidayDisclaimer: "Hours may vary during public holidays.",
  },
} as const;

/**
 * Generates an encoded WhatsApp URL with prefilled appointment parameters.
 */
export function createWhatsAppBookingLink(options: {
  patientName?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  reason?: string;
}): string {
  const { patientName, phone, preferredDate, preferredTime, reason } = options;
  const lines = [
    `*${CLINIC_CONFIG.name} Appointment Request*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `*Patient Name:* ${patientName?.trim() || "Visitor"}`,
    phone?.trim() ? `*Contact Phone:* ${phone.trim()}` : null,
    preferredDate ? `*Preferred Date:* ${preferredDate}` : null,
    preferredTime ? `*Preferred Time:* ${preferredTime}` : null,
    `*Reason for Visit:* ${reason || "General Dental Consultation"}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via ${CLINIC_CONFIG.domain}_`,
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${CLINIC_CONFIG.contact.whatsAppDigits}?text=${message}`;
}
