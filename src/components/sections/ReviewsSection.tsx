"use client";

import React from "react";
import { m } from "framer-motion";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: StaticImageData;
}

import default_pp from "@/assets/default_pp.webp";

const reviews: Review[] = [
  {
    id: 1,
    name: "Sophie Martin",
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 5,
    avatar: default_pp,
  },
  {
    id: 2,
    name: "Alex Dupont",
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 4,
    avatar: default_pp,
  },
  {
    id: 3,
    name: "Emma Leroy",
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 5,
    avatar: default_pp,
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-surface" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        {/* Introduction */}
        <m.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Ce que disent nos joueurs
          </h2>
          <p className="text-textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            distinctio soluta placeat hic voluptatibus autem corrupti
            repellendus deleniti omnis quo, nobis, nostrum aut commodi
            praesentium consequuntur beatae id ipsam iste?
          </p>
        </m.div>

        {/* Avis */}
        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <m.div
              key={review.id}
              className="bg-background border border-border rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-full border-2 border-primary"
                />
              </div>

              {/* Nom */}
              <h3 className="text-lg font-semibold text-textPrimary mb-2">
                {review.name}
              </h3>

              {/* Étoiles */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating
                        ? "text-primary fill-primary"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Commentaire */}
              <p className="text-textSecondary italic">"{review.comment}"</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
