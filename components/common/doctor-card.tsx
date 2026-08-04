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
    <Card className="group/doctor h-full overflow-hidden card-premium card-premium-hover ring-0">
      <div className="p-4 pb-0">
        <div className="photo-frame relative aspect-[4/5]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="img-zoom object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-cns-navy/55 to-transparent" />
        </div>
      </div>
      <CardHeader className="gap-3 px-6 pb-2 pt-5">
        {department ? <Tag variant="blue">{department}</Tag> : null}
        <CardTitle className="text-xl font-semibold tracking-tight text-cns-navy">
          {name}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">{title}</CardDescription>
      </CardHeader>
      {href ? (
        <CardFooter className="border-t-0 bg-transparent px-6 pb-6 pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-10 rounded-full px-3 text-primary hover:bg-primary/5"
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
