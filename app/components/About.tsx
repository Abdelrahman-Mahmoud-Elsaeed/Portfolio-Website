"use client";

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Languages, Download, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { GlowingButton } from './GlowingButton';

export function About() {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'abdelrahman.mahmoud.elsaeed@gmail.com' },
    { icon: Phone, label: 'Phone', value: '(+20) 01095160726' },
    { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
    { icon: Languages, label: 'Languages', value: 'Arabic, English' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-3 sm:mb-4 text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative h-full bg-gray-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-cyan-400/50 transition-all">
              <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20">
                  <Image
                    src="/me.png"
                    alt="Abdelrahman Mahmoud"
                    fill
                    sizes="112px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-cyan-300">Full Stack Developer</h3>
                  <p className="text-sm text-gray-400">Scalable applications, APIs, and cloud-ready products</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I architect scalable web applications, RESTful microservices, and multi-tenant platforms across the full stack. My work combines product-focused frontend development with secure backend systems and cloud infrastructure.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Recent work includes search optimization that improved response times by up to 40% and workflow automation that reduced manual effort by as much as 60%.
              </p>
              
              <a
                href="https://drive.google.com/uc?export=download&id=1xC8EL_nFQHnHF2tgCM2OMunOLc0HijcI"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV (opens in a new tab)"
              >
                <GlowingButton>
                  <Download aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </GlowingButton>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-around space-y-3 sm:space-y-4"
          >
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/40 backdrop-blur-md border border-purple-500/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-purple-400/50 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                      <p className="text-white truncate sm:whitespace-normal">{info.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-cyan-500/30 bg-gray-900/40 p-5 backdrop-blur-md sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap aria-hidden="true" className="h-6 w-6 text-cyan-400" />
              <h3 className="text-cyan-300">Education</h3>
            </div>
            <h4 className="text-white">Bachelor&apos;s Degree</h4>
            <p className="mt-1 text-gray-300">Computer Teacher Preparation Department</p>
            <p className="mt-1 text-sm text-gray-400">Faculty of Specific Education, Mansoura University · Graduated June 2023</p>
            <p className="mt-3 text-sm text-gray-400">Grade: Very Good (81%)</p>
            <p className="mt-1 text-sm text-gray-400">Focus: Computer Science, Software Engineering, Database Management</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-purple-500/30 bg-gray-900/40 p-5 backdrop-blur-md sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Award aria-hidden="true" className="h-6 w-6 text-purple-300" />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-purple-200">Certifications</h3>
                <a
                  href="https://drive.google.com/file/d/1Zfefko2VbJInQfJVNWXPiVU2UfEYvX82/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-200 underline underline-offset-4 hover:text-white"
                >
                  View certificates
                </a>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>AWS Certified Developer - Associate</li>
              <li>AWS Certified Cloud Practitioner <span className="text-gray-500">(ID: 49a69e2bee3f4dde9b7c43c832ce9149)</span></li>
              <li>Advanced Full-Stack Web Development, MCIT Egypt <span className="text-gray-500">(March 2023 · ID: HG4NWNRJ)</span></li>
              <li>Meta Front-End Developer Specialization, Coursera <span className="text-gray-500">(10+ certifications · ID: FR55AET5H5QQ)</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
