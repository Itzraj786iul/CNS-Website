"use client";

import { Mail, MapPin, Phone, Siren } from "lucide-react";

import { contactCards } from "@/components/home/data";
import { ContactCard } from "@/components/common/contact-card";
import { LocationMapPanel } from "@/components/common/location-map-panel";
import { CardGridItem, CardGridSection } from "@/components/common/sections";

const iconMap = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  emergency: Siren,
} as const;

const variantMap = {
  phone: "blue",
  email: "green",
  location: "orange",
  emergency: "orange",
} as const;

function ContactPreviewSection() {
  return (
    <CardGridSection
      variant="muted"
      spacing="default"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Reach Our Care Team",
        title: "We Are Here When You Need Us",
        description:
          "Whether you need an appointment, a referral, or directions to our campus — our team responds with clarity and care.",
      }}
      footer={
        <LocationMapPanel showDirections directionsHref="/contact" />
      }
    >
      {contactCards.map((card) => (
        <CardGridItem key={card.title}>
          <ContactCard
            title={card.title}
            value={card.value}
            description={card.description}
            href={card.href}
            icon={iconMap[card.icon]}
            iconVariant={variantMap[card.icon]}
            density="preview"
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { ContactPreviewSection };
