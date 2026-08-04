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
        <div className="p-4 pb-0">
          <div className="photo-frame relative aspect-[5/6]">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              className="img-zoom object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <Tag variant="green" className="shadow-soft backdrop-blur-sm">
                {doctor.experience}
              </Tag>
              <span
                className={cn(
                  "inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-soft backdrop-blur-sm",
                  isAvailable
                    ? "bg-secondary/90 text-white"
                    : "bg-card/90 text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    isAvailable ? "bg-white" : "bg-muted-foreground/80"
                  )}
                  aria-hidden="true"
                />
                {isAvailable ? "Accepting Appointments" : "Limited Availability"}
              </span>
            </div>
          </div>
        </div>

        <CardHeader className="gap-3 px-6 pb-2 pt-5">
          <CardTitle className="text-xl font-semibold tracking-tight text-cns-navy">
            {doctor.name}
          </CardTitle>
          <CardDescription className="text-base font-medium text-primary">
            {doctor.designation}
          </CardDescription>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doctor.qualification}
          </p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 px-6">
          <div className="flex flex-wrap gap-2">
            {doctor.specializations.map((spec) => (
              <Tag key={spec} variant="blue" className="text-[11px]">
                {spec}
              </Tag>
            ))}
          </div>
          <p className="text-sm leading-[1.75] text-muted-foreground">{doctor.bio}</p>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 border-t-0 bg-transparent px-6 pb-6 pt-0">
          <Button
            nativeButton={false}
            render={
              <Link href={`/doctors#${doctor.id}`}>
                View Profile
                <ArrowUpRight />
              </Link>
            }
            variant="ghost"
            className="group/btn h-10 w-full justify-start rounded-full px-3 font-semibold text-primary hover:bg-primary/10"
          />
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <Link href="/appointment">
                  <CalendarDays />
                  Book Appointment
                </Link>
              }
              size="sm"
              className="h-10 flex-1 rounded-full bg-secondary font-semibold text-secondary-foreground shadow-glow-green hover:bg-[#527a14]"
            />
            <Button
              nativeButton={false}
              render={
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  WhatsApp
                </a>
              }
              variant="outline"
              size="sm"
              className="h-10 flex-1 rounded-full border-border font-semibold text-cns-navy hover:border-primary/35 hover:bg-primary/5"
            />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export { DoctorProfileCard };
