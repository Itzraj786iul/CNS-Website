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
      <Card className="group/doctor flex h-full flex-col overflow-hidden card-premium card-premium-hover ring-0">
        <div className="p-4 pb-0">
          <div className="photo-frame relative aspect-[4/5]">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              className="img-zoom object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-cns-navy/65 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Tag variant="green" className="shadow-soft backdrop-blur-sm">
                {doctor.experience}
              </Tag>
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

        <CardFooter className="flex flex-col gap-2.5 border-t-0 bg-transparent px-6 pb-6 pt-0 sm:flex-row">
          <Button
            nativeButton={false}
            render={
              <Link href={`/doctors#${doctor.id}`}>
                View Profile
                <ArrowUpRight />
              </Link>
            }
            variant="ghost"
            className="group/btn h-11 flex-1 rounded-full px-4 text-primary hover:bg-primary/5"
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
            className="h-11 flex-1 rounded-full bg-secondary text-secondary-foreground shadow-glow-green hover:bg-secondary/90"
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export { DoctorProfileCard };
