import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Dr. Nishant Jayant",
      role: "Founder & Director",
      img: "/Nishant.png",
      link: "https://www.linkedin.com/in/dr-nishant-jayant-57249015/",
    },
    {
      name: "Nutan Guleria",
      role: "Business Head",
      img: "/nutan.jpg",
      link: "https://www.linkedin.com/in/nutan-guleria-05822a68/",
    },
    {
      name: "Sauvik Acharjee",
      role: "Head - Brand Growth Strategist",
      img: "/savik.jpg",
      link: "https://www.linkedin.com/in/sauvik-acharjee-marketeer-communication-writer-branding-dei/",
    },
    {
      name: "Syed Aftab",
      role: "Production Head",
      img: "/aftab.jpg",
      link: "https://www.linkedin.com/in/syed-aftab-140202192/",
    },
    {
      name: "Gautam Mahadikar",
      role: "Lead - Business Development",
      img: "/Gautam.jpg",
      link: "https://www.linkedin.com/in/gautam-mahadikar-1b6a351ab/",
    }
  ];

  return (
    <section
      className="
        w-full py-24 px-6
        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-serif mb-16">
        Meet The Team
      </h2>

      {/* Team Grid */}
      <div className="flex justify-center items-center xl:flex-wrap flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-28 xl:gap-32 text-center max-w-screen-4xl mx-auto px-6 lg:px-8">
        {team.map((member, index) => (
          <div key={index}>
            {/* Circular Image */}
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden grayscale hover:grayscale-0 duration-300">
              <Image
                src={member.img}
                alt={member.name}
                width={1080}
                height={1080}
                className="w-full h-full object-cover aspect-auto"
              />
            </div>

            <h3 className="mt-6 text-lg font-serif">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm tracking-wide">
              {member.role}
            </p>

            {/* LinkedIn Icon */}
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center w-10 h-10 
                border rounded-full mt-4
                border-gray-400 dark:border-gray-600 
                hover:bg-gray-200 dark:hover:bg-gray-800 
                transition
              "
            >
              <Linkedin size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
