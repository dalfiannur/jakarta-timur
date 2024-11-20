"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { Icon } from "@/app/icons";
import { Computed, useObservable } from "@legendapp/state/react";

export type CardLinkProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
};

export const CardLink = ({
  title,
  description,
  icon,
  href = "#",
}: CardLinkProps) => {
  const hovered$ = useObservable(false);
  return (
    <Link href={href}>
      <Computed>
        {() => (
          <motion.div
            onHoverStart={() => hovered$.set(true)}
            onHoverEnd={() => hovered$.set(false)}
          >
            <div className="group w-full inline-flex bg-white hover:bg-pink-100 drop-shadow p-5 rounded-xl items-center gap-5 border border-transparent hover:border-pink-500 transition-all">
              <div className="w-10 md:w-16 aspect-square rounded-xl bg-pink-100/60 group-hover:bg-white transition-all flex justify-center items-center">
                {icon}
              </div>
              <div className="flex-1">
                <h5 className="text-lg font-semibold">{title}</h5>
                <motion.p
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: 10,
                    fontSize: 12,
                    lineHeight: '16px'
                  }}
                  animate={{
                    opacity: hovered$.get() ? 1 : 0,
                    height: hovered$.get() ? "auto" : 0,
                    y: hovered$.get() ? 0 : 10,
                  }}
                >
                  {description}
                </motion.p>
              </div>
              <div>
                <Icon name="ChevronRight" size={16} />
              </div>
            </div>
          </motion.div>
        )}
      </Computed>
    </Link>
  );
};
