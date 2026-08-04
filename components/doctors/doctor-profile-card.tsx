"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
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
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type DoctorProfileCardProps = {
  doctor: DoctorProfile;
  className?: string;
};

function DoctorProfileCard({ doctor, className }: DoctorProfileCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="group/doctor flex h-full flex-col overflow-hidden border-cns-border/80 bg-white shadow-soft ring-0">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={doctor.image.src}
            alt={doctor.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover/doctor:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-cns-navy/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <Tag variant="green">{doctor.experience}</Tag>
          </div>
        </div>

        <CardHeader className="gap-3">
          <CardTitle className="text-xl font-semibold text-cns-navy">
            {doctor.name}
          </CardTitle>
          <CardDescription className="text-base font-medium text-primary">
            {doctor.designation}
          </CardDescription>
          <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {doctor.specializations.map((spec) => (
              <Tag key={spec} variant="blue" className="text-[11px]">
                {spec}
              </Tag>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doctor.bio}
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 border-t-0 bg-transparent pt-0 sm:flex-row">
          <Button
            nativeButton={false}
            render={
              <Link href={`/doctors#${doctor.id}`}>
                View Profile
                <ArrowUpRight />
              </Link>
            }
            variant="ghost"
            className="group/btn h-10 flex-1 rounded-full px-4 text-primary hover:bg-primary/5"
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/appointment">
                <CalendarDays />
                Book Appointment
              </Link>
            }
            size="sm"
            className="h-10 flex-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export { DoctorProfileCard };
