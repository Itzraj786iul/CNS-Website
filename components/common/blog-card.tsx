"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
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
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
  image: {
    src: string;
    alt: string;
  };
  href?: string;
  className?: string;
};

function BlogCard({
  title,
  excerpt,
  category,
  date,
  image,
  href,
  className,
}: BlogCardProps) {
  const content = (
    <Card className="group/blog h-full overflow-hidden border-cns-border/80 bg-white shadow-soft ring-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover/blog:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {category ? <Tag variant="green">{category}</Tag> : null}
          {date ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" aria-hidden="true" />
              {date}
            </span>
          ) : null}
        </div>
        <CardTitle className="text-xl font-semibold leading-snug text-cns-navy">
          {title}
        </CardTitle>
      </CardHeader>
      {excerpt ? (
        <CardContent>
          <CardDescription className="line-clamp-3 text-base leading-relaxed">
            {excerpt}
          </CardDescription>
        </CardContent>
      ) : null}
      {href ? (
        <CardFooter className="border-t-0 bg-transparent pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5"
          >
            Read Article
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

export { BlogCard };
