"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type DoctorCardProps = {
  name: string;
  title: string;
  department?: string;
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
  image,
  href,
  className,
}: DoctorCardProps) {
  const content = (
    <Card className="group/doctor h-full overflow-hidden border-cns-border/80 bg-white shadow-soft ring-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover/doctor:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-cns-navy/50 to-transparent" />
      </div>
      <CardHeader className="gap-3">
        {department ? <Tag variant="blue">{department}</Tag> : null}
        <CardTitle className="text-xl font-semibold text-cns-navy">{name}</CardTitle>
        <CardDescription className="text-base">{title}</CardDescription>
      </CardHeader>
      {href ? (
        <CardFooter className="border-t-0 bg-transparent pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5"
          >
            View Profile
            <ArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
      {href ? (
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
