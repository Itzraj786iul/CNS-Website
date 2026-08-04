"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import type { DoctorProfile } from "@/components/doctors/data";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WHATSAPP_URL } from "@/lib/contact-links";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type DoctorProfileCardProps = {
  doctor: DoctorProfile;
  className?: string;
};

function DoctorProfileCard({ doctor, className }: DoctorProfileCardProps) {
  const isAvailable = doctor.available !== false;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="group/doctor flex h-full flex-col overflow-hidden card-premium card-premium-hover ring-0">
        <div className="p-3 pb-0">
          <div className="photo-frame relative aspect-[3/4] max-h-[200px] sm:max-h-[220px]">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              className="img-zoom object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
              <Tag variant="green" className="px-2 py-0.5 text-[10px] shadow-soft backdrop-blur-sm">
                {doctor.experience}
              </Tag>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-soft backdrop-blur-sm",
                  isAvailable
                    ? "bg-secondary/90 text-white"
                    : "bg-card/90 text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "size-1 rounded-full",
                    isAvailable ? "bg-white" : "bg-muted-foreground/80"
                  )}
                  aria-hidden="true"
                />
                {isAvailable ? "Available" : "Limited"}
              </span>
            </div>
          </div>
        </div>

        <CardHeader className="gap-1 px-3.5 pb-0 pt-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 space-y-0.5">
              <CardTitle className="text-base font-semibold tracking-tight text-cns-navy">
                {doctor.name}
              </CardTitle>
              <CardDescription className="text-sm font-medium leading-snug text-primary">
                {doctor.designation}
              </CardDescription>
              <p className="text-xs leading-snug text-muted-foreground">
                {doctor.qualification}
              </p>
            </div>
            <Link
              href={`/doctors#${doctor.id}`}
              className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-primary hover:text-primary/80"
            >
              Profile
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-2 px-3.5 pb-0 pt-1.5">
          <div className="flex flex-wrap gap-1">
            {doctor.specializations.map((spec) => (
              <Tag key={spec} variant="blue" className="px-2 py-0.5 text-[10px]">
                {spec}
              </Tag>
            ))}
          </div>
          <p className="card-desc-compact">{doctor.bio}</p>
        </CardContent>

        <CardFooter className="mt-auto flex gap-2 border-t-0 bg-transparent px-3.5 pb-3.5 pt-2">
          <Button
            nativeButton={false}
            render={
              <Link href="/appointment">
                <CalendarDays />
                Book
              </Link>
            }
            size="sm"
            className="h-8 min-h-0 flex-1 rounded-full bg-secondary text-xs font-semibold text-secondary-foreground shadow-glow-green hover:bg-[#527a14]"
          />
          <Button
            nativeButton={false}
            render={
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            }
            variant="outline"
            size="icon-sm"
            className="shrink-0 rounded-full border-border text-cns-navy hover:border-primary/35 hover:bg-primary/5"
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export { DoctorProfileCard };
