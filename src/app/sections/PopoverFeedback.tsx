"use client";

import { ReactNode, useEffect, useState } from "react";
import { Icon } from "../icons";
import { Text } from "../components/Text";
import { Flex } from "../components/Flex";
import { addDays, isToday } from "date-fns";

const numbers = Array.from(new Array(5).keys());

export const PopoverFeedback = () => {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const initial = localStorage.getItem("initial");
    const feedback = localStorage.getItem("feedback");

    if (feedback === null && initial !== null && isToday(initial)) {
      setOpen(true);
    } else if (feedback === null && initial === null) {
      localStorage.setItem("initial", new Date().toISOString());
    }
  }, []);

  const setFeedback = () => {
    localStorage.setItem("feedback", new Date().toISOString());
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
    localStorage.setItem("initial", addDays(new Date(), 1).toISOString());
  };

  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="relative max-w-lg rounded-xl bg-white p-8 shadow">
        <button className="absolute right-2 top-2" onClick={onClose}>
          <Icon name="XGrey" className="h-8 w-8" />
        </button>
        <div className="flex justify-center">
          <Icon name="Popup" className="w-[300px]" />
        </div>
        <Text size="xl" weight="bold" align="center" className="mt-8">
          Bantu Kami Melayani Anda Lebih Baik
        </Text>
        <Text color="subtle" align="center" size="sm" className="mt-2">
          Dalam upaya kami meningkatkan layanan publik, masukan Anda sangat
          penting. Sampaikan pendapat Anda dan bantu kami memberikan
          pemerintahan yang lebih efektif
        </Text>
        <div className="mt-4 w-full">
          <Text size="sm" weight="semibold">
            Penilaian pengalama anda denga layanan kami
          </Text>
          <div className="mt-2 flex items-center gap-4">
            {numbers.map((n) => (
              <ButtonNumber
                key={n}
                active={n < stars}
                onClick={() => setStars(n + 1)}
              >
                {n + 1}
              </ButtonNumber>
            ))}

            <button className="flex gap-2" onClick={() => setStars(5)}>
              <Icon name="Star" className="h-6 w-6 text-pink-500" />
              Stars
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Flex justify="between" align="center">
            <Text size="sm" weight="semibold">
              Berikan masukanmu (Opsional)
            </Text>
            <Flex align="center" gap="sm">
              <Icon name="Star" className="h-4 w-4 text-pink-500" />
              <Text size="sm">Stars</Text>
            </Flex>
          </Flex>
          <textarea className="min-h-28 w-full overflow-hidden rounded-xl bg-gray-100 p-4 focus:outline-pink-500" />
        </div>
        <button
          onClick={setFeedback}
          className="mt-8 w-full rounded-lg bg-pink-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  ) : null;
};

const ButtonNumber = ({
  children,
  onClick,
  active,
}: {
  children?: ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      data-active={active ? "true" : undefined}
      className="h-10 w-10 rounded border text-gray-400 hover:border-pink-500 hover:text-pink-500 data-[active]:border-pink-500 data-[active]:bg-pink-500 data-[active]:text-white"
    >
      {children}
    </button>
  );
};
