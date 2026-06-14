import { site } from "@/lib/site";
import { Icon } from "@/components/Icons";

export function WhatsAppButton() {
  const msg = encodeURIComponent(
    `Hello ${site.name}, I would like to enquire about a legal matter.`
  );
  return (
    <a
      href={`https://wa.me/${site.contact.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
