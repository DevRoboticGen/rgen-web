import Image from "next/image";
import { LinkedinIcon as LinkedIn } from "lucide-react";
import { motion } from "framer-motion";
import { Member } from "./team-page";

export default function TeamMember({ member }: { member: Member }) {
  return (
    <motion.div
      className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PersonAvatar />
      <motion.div
        className="bottom-0 left-0 right-0 bg-white p-3 transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:p-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-grow pr-2">
            <h3 className="truncate text-base font-semibold sm:text-lg">
              {member.name}
            </h3>
            <p className="truncate text-xs sm:text-sm">{member.title}</p>
          </div>
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-blue-600 transition-colors group-hover:text-blue-200"
          >
            <LinkedIn className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );

  function PersonAvatar() {
    return (
      <div className="relative aspect-square w-full">
        {/* Background transition layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Normal Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={member.image || "/placeholder.svg?height=400&width=400"}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Hover Transition Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-100 to-purple-200"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Hover Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={member.image || "/placeholder.svg?height=400&width=400"}
            alt={`${member.name} hover`}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    );
  }
}
