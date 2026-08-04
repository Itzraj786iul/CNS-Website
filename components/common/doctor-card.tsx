"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

type DoctorCardProps = {
  name: string;
  title: string;
  department?: string;
  specializations?: string[];
  intro?: string;
  available?: boolean;
  showQuickActions?: boolean;
  image: {
    src: string;
    alt: string;
  };
  href?: string;
  className?: string;
};

function DoctorCard({
  name,
  title,
  department,
  specializations,
  intro,
  available,
  showQuickActions = false,
  image,
  href,
  className,
}: DoctorCardProps) {
  const content = (
    <Card className="group/doctor flex h-full flex-col overflow-hidden card-premium card-premium-hover ring-0">
      <div className="p-4 pb-0">
        <div className="photo-frame relative aspect-[4/5]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="img-zoom object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent" />
          {showQuickActions && available !== undefined ? (
            <div className="absolute left-4 top-4">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-soft backdrop-blur-sm",
                  available
                    ? "bg-secondary/90 text-white"
                    : "bg-card/90 text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    available ? "bg-white" : "bg-muted-foreground"
                  )}
                  aria-hidden="true"
                />
                {available ? "Accepting Appointments" : "Limited Availability"}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <CardHeader className="gap-3 px-6 pb-2 pt-5">
        {department ? <Tag variant="green">{department}</Tag> : null}
        <CardTitle className="text-xl font-semibold tracking-tight text-cns-navy">
          {name}
        </CardTitle>
        <CardDescription className="text-base font-medium leading-relaxed text-primary">
          {title}
        </CardDescription>
      </CardHeader>
      {specializations?.length || intro ? (
        <CardContent className="flex flex-1 flex-col gap-3 px-6 pb-2 pt-0">
          {specializations?.length ? (
            <div className="flex flex-wrap gap-1.5">
              {specializations.map((spec) => (
                <Tag key={spec} variant="blue" className="text-[11px]">
                  {spec}
                </Tag>
              ))}
            </div>
          ) : null}
          {intro ? (
            <p className="text-sm leading-[1.75] text-muted-foreground">{intro}</p>
          ) : null}
        </CardContent>
      ) : null}
      {showQuickActions ? (
        <CardFooter className="mt-auto flex flex-col gap-2 border-t-0 bg-transparent px-6 pb-6 pt-2">
          {href ? (
            <Button
              nativeButton={false}
              render={
                <Link href={href}>
                  View Profile
                  <ArrowUpRight />
                </Link>
              }
              variant="ghost"
              className="group/btn h-10 w-full justify-start rounded-full px-3 font-semibold text-primary hover:bg-primary/10"
            />
          ) : null}
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <Link href="/appointment">
                  <CalendarDays />
                  Quick Appointment
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
      ) : href ? (
        <CardFooter className="border-t-0 bg-transparent px-6 pb-6 pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-10 rounded-full px-3 font-semibold text-primary hover:bg-primary/10"
          >
            View Profile
            <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      {href && !showQuickActions ? (
        <Link href={href} className="block h-full focus-visible:outline-none">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
}

export { DoctorCard };
