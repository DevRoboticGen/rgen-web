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
        className="bottom-0 left-0 right-0 bg-white p-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm">{member.title}</p>
          </div>
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-600 transition-colors group-hover:text-blue-200"
          >
            <LinkedIn className="h-5 w-5" />
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
