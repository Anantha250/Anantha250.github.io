import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Code2, Cpu, Boxes, Rocket, Phone } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const skills = {
  Programming: ["Go", "Python", "PHP (Laravel)", "JavaScript", "TypeScript", "C", "C++"],
  "Web & Backend": ["REST API", "React", "HTML/CSS", "Swagger", "PostgreSQL", "MySQL", ".NET MVC"],
  "QA & Testing": ["Unit Test (Go/PHP)", "Postman", "API Testing", "Debugging"],
  DevOps: ["Docker", "Railway", "Oracle Cloud", "Git", "Nginx", "CI-like Script"],
  "AI & Robotics": ["OpenCV", "TensorFlow Lite", "STM32Cube.AI", "Embedded Systems"],
};

const projects = [
    {
    title: "Thome Inspector – Production Website",
    pill: "Laravel • Docker • Deployment",
    desc:
      "ฝึกงานและทำงานจริงในโปรเจกต์เว็บไซต์ Thome Inspector ดูแลทั้งการพัฒนาและ Deploy ระบบด้วย Laravel, ปรับปรุงฟีเจอร์, ปรับโครงสร้างฐานข้อมูล และปรับ UI ให้ใช้งานง่ายและ Responsive.",
    link: "https://thomeinspector.com/",
    tags: ["Laravel", "PHP", "Docker", "Production"],
  },
  {
    title: "Smart Village Terminal – CDG Hackathon 2025 (Special Prize)",
    pill: "Hackathon • Web App",
    desc:
      "พัฒนาเว็บต้นแบบสำหรับ Smart Village Terminal เพื่อช่วยให้ชุมชนเข้าถึงบริการดิจิทัลและข้อมูลภาครัฐได้ง่ายขึ้น นำเสนอในงาน CDG Hackathon 2025 และได้รับรางวัล Special Prize.",
    link:
      "https://www.canva.com/design/DAGu7wsKli4/MsGC_9teEN_4ddHhETV0BQ/edit",
    tags: ["Hackathon", "Web Application", "Team Project"],
  },
  {
    title: "MBTI Prediction Website (JS + Python)",
    pill: "JavaScript • Python • OOP",
    desc:
      "เว็บไซต์ทำนายบุคลิกภาพ MBTI จาก 10 คำถาม โดยใช้ Pearson Similarity ในการคำนวณผลลัพธ์ รับผิดชอบงานฝั่ง Frontend เป็นหลัก และช่วยออกแบบโครงสร้าง Backend ตามหลัก OOP.",
    link: "https://github.com/louiskub/MBTI_Prediction-Linear-Algebra-",
    tags: ["JavaScript", "Python", "OOP", "Pearson Similarity"],
  },
  {
    title: "GoTogether – Backend Ride-Sharing System",
    pill: "Go • Fiber • PostgreSQL",
    desc:
      "พัฒนา Backend สำหรับระบบแชร์รถในมหาวิทยาลัยด้วย Go (Fiber) รองรับการจัดการทริป การจับคู่คนขับ-ผู้โดยสาร และรองรับโครงสร้างสำหรับระบบกระเป๋าเงิน (wallet).",
    link: "https://github.com/Anantha250/gotogether_backend",
    tags: ["Go", "Fiber", "PostgreSQL", "REST API"],
  },
  {
    title: "MovieCrawling Website (Python + React)",
    pill: "React • Python • Web Crawling",
    desc:
      "พัฒนาเว็บสำหรับดึงข้อมูลภาพยนตร์จากแหล่งภายนอก โดยใช้ Regex ในการดึงข้อมูล และแสดงผลผ่าน UI ที่ Responsive ด้วย React.",
    link: "https://github.com/jueeeeeen/Movie-Web-Crawler-frontend",
    tags: ["React", "Python", "Web Crawler"],
  },
  {
    title: "CARC 2025 – Bowling Robot (1st Runner-Up)",
    pill: "Raspberry Pi • OpenCV • Robotics",
    desc:
      "พัฒนาหุ่นยนต์โบว์ลิ่งอัตโนมัติด้วย Raspberry Pi + OpenCV ออกแบบ Vision Pipeline สำหรับตรวจจับเลนและเป้าหมาย ควบคุมการเคลื่อนที่และยิงลูกโบว์ลิ่งแบบ Real-time ได้รางวัลรองชนะเลิศอันดับ 1.",
    link: "https://www.ce.kmitl.ac.th/HallOfFame/Detail?HallId=48",
    tags: ["OpenCV", "Raspberry Pi", "Robotics", "Competition"],
  },
  {
    title: "Waterpark Management (Python OOP)",
    pill: "Python • OOP",
    desc:
      "ระบบจัดการสวนน้ำที่ออกแบบด้วยแนวคิด Object-Oriented Programming แยกคลาสตามบทบาท (ลูกค้า, ตั๋ว, ระบบจัดการ) เพื่อให้โค้ดอ่านง่ายและขยายต่อได้สะดวก.",
    link: "https://github.com/Anantha250/DKUB_waterpark",
    tags: ["Python", "OOP", "Console App"],
  },
  {
    title: "Gather App – Activity Platform (.NET MVC)",
    pill: ".NET MVC • WebSockets • MySQL",
    desc:
      "พัฒนาเว็บแพลตฟอร์มสำหรับจัดกิจกรรมร่วมกันด้วย .NET MVC รับผิดชอบฝั่ง Backend, Controller, Logic ระบบ และเพิ่มฟีเจอร์แชทแบบ Real-time ด้วย WebSocket และ MySQL รวมถึงช่วยปรับปรุง Frontend และเพิ่ม Google Login.",
    link: "https://github.com/louiskub/GatherApp",
    tags: [".NET MVC", "WebSockets", "MySQL", "Google Login"],
  },
];

const experience = [
  {
    role: "Web Developer (Intern / Freelance)",
    org: "ต.จรัสชัยสากลก่อสร้าง / Thome Inspector",
    time: "2025 – Present",
    points: [
      "ร่วมพัฒนาและปรับปรุงเว็บไซต์องค์กรด้วย Laravel โดยรับผิดชอบทั้งฟีเจอร์ใหม่ การแก้บั๊ก และการดูแลระบบหลังบ้านให้รองรับการใช้งานจริงของลูกค้า",
      "ดูแลกระบวนการ Deploy ทั้งหมด ตั้งแต่เตรียม Environment, ตรวจสอบความถูกต้องของไฟล์ config ไปจนถึงการปล่อย Production",
      "ปรับปรุงความเร็วโหลดหน้าเว็บและโครงสร้าง Frontend ให้เหมาะกับ SEO และรองรับทุกขนาดหน้าจอตามดีไซน์ Figma",
      "จัดการโดเมน, DNS, SSL Certificate และตั้งค่า Reverse Proxy ด้วย Nginx เพื่อให้ระบบใช้งานได้เสถียรบน Production Server",
      "สร้างสคริปต์กึ่งอัตโนมัติสำหรับอัปเดตโค้ดและการจัดการ .env เพื่อให้ Deploy ง่ายขึ้นและลดความผิดพลาดระหว่างการปล่อยระบบ",
      "ทำงานร่วมกับผู้บริหารและทีมตรวจบ้านเพื่อปรับเนื้อหาเว็บไซต์ให้สอดคล้องกับงานบริการจริง โดยเน้นความง่ายต่อผู้ใช้งาน",
    ],
  },
  {
    role: "Backend & QA (University Project)",
    org: "GoTogether App",
    time: "2025 – Present",
    points: [
      "ออกแบบฐานข้อมูล และเขียน REST API ด้วย Go (Fiber, GORM) + Swagger",
      "เขียน Unit Test พื้นฐาน, ทดสอบ API ด้วย Postman และจัดการ Docker Compose / Reverse-Proxy",
      "ร่วมออกแบบ Flow การจองทริปและรีวิว ให้ใช้งานได้จริงและทดสอบได้ง่าย",
    ],
  },
  {
    role: "AI Robotics (Competition)",
    org: "KMITL",
    time: "2025",
    points: [
      "พัฒนา Vision Pipeline ด้วย OpenCV ตรวจจับสี/วัตถุแบบ Real-time",
      "ควบคุมการเคลื่อนที่และยิงเป้าหมายด้วย STM32 + Servo",
      "ปรับแต่ง Threshold/Logic ให้ทนสภาพแสงจริง และทดสอบซ้ำหลายรอบ",
    ],
  },
];

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-20 ${className}`}>{children}</section>
);

const Badges = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur">
        {t}
      </span>
    ))}
  </div>
);

const Card = ({ children }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-sm hover:shadow-md transition-shadow">
    {children}
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-white/10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex h-14 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="h-5 w-5" />
          <span>Anantachai</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Anantha250"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ananthachai-jarnjuea-49913327b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <Section id="home" className="pt-10">
    <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs ring-1 ring-emerald-500/20">
          <span>Computer Engineering •</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          สวัสดีครับ, ผม <span className="underline decoration-emerald-400">อนันธชัย จานเจือ</span>
          <br className="hidden md:block" />
          นักศึกษาวิศวกรรมคอมพิวเตอร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">
          สนใจทำงานสาย{" "}
          <span className="font-medium">
            Software Engineer, QA/Tester, Backend และ Full-Stack
          </span>{" "}
          มีประสบการณ์พัฒนาเว็บ Production, เขียน REST API, ออกแบบฐานข้อมูล
          เขียนเทสต์พื้นฐาน และดูแล Deploy ด้วย Docker & Cloud
          พร้อมนำทักษะเหล่านี้ไปต่อ
          ยอดในทีมพัฒนาซอฟต์แวร์ขององค์กรต่าง ๆ.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
          >
            ดูผลงาน
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl ring-1 ring-neutral-300/50 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5"
          >
            ติดต่อผม
          </a>
        </div>
        <div className="flex gap-6 pt-2 text-sm text-neutral-600 dark:text-neutral-300">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            Software / Full-stack
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            QA & Testing
          </div>
          <div className="flex items-center gap-2">
            <Boxes className="h-4 w-4" />
            Docker / Cloud / DevOps
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-400/20 to-sky-400/10 ring-1 ring-white/10 p-2">
          <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-neutral-900/60 grid place-items-center text-center px-6">
            <div>
              <img
                    src="/Anan.jpg"
                    alt="Anantachai"
                    className="w-80 h-80 rounded-full object-cover mx-auto shadow-lg"
                  />
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                Anantachai Jarnjuea
              </p>
              <p className="text-xs text-neutral-500 mt-1">(Beam)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about">
    <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-semibold">เกี่ยวกับผม</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          ผมเป็นนักศึกษาปี 3 วิศวกรรมคอมพิวเตอร์ ที่ชอบสร้างระบบที่นำไปใช้ได้จริง
          สนใจทำงานในทีมพัฒนาซอฟต์แวร์ทั้งสาย{" "}
          <span className="font-medium">
            Software Engineer, QA/Tester, Backend และ Full-Stack
          </span>
          เคยทำเว็บจริงให้ลูกค้า, ทำโปรเจกต์ Backend ที่มีฐานข้อมูลและ API ชัดเจน
          และมีพื้นฐานงานทดสอบระบบทั้งในระดับ Unit และ API.
        </p>
        <a
          href="#contact"
          className="inline-flex mt-4 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          เปิดรับโอกาสฝึกงาน/งานสาย Software & QA
        </a>
      </div>
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
        <Card>
        <h3 className="font-medium">จุดเด่น</h3>
        <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
          <li>เข้าใจทั้ง Backend, Frontend, Database, QA/Testing และ DevOps ระดับเริ่ม–กลาง</li>
          <li>มีประสบการณ์ Deploy ระบบจริง (Docker, Nginx, Cloud VPS, Oracle Cloud, Domain/SSL)</li>
          <li>ทำ API/Service ได้เป็นระบบ พร้อมออกแบบฐานข้อมูลและจัดการ Migration</li>
          <li>แก้บั๊กและ Debug เก่ง โดยเฉพาะปัญหาเชิงระบบ (Server, Docker, Network, SQL)</li>
          <li>ทำงานเป็นทีมได้ดี แบ่งงานชัดเจน และรับผิดชอบงานให้เสร็จตรงเวลา</li>
          <li>เรียนรู้ไว สามารถศึกษาเทคโนโลยีใหม่และนำไปใช้ได้ทันทีในโปรเจกต์จริง</li>
        </ul>
      </Card>
        <Card>
        <h3 className="font-medium">สิ่งที่กำลังพัฒนา</h3>
        <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
          <li>ออกแบบระบบให้ Scale ได้ และใช้แนวคิด Clean Architecture / DDD</li>
          <li>เรียนรู้การเขียนเทสต์เชิงลึก (Unit, Integration, E2E, Load Test) ผสาน CI/CD</li>
          <li>เพิ่มความเข้าใจด้าน System Design และ Distributed Systems</li>
          <li>ต่อยอดทักษะ AI/Automation เพื่อช่วยงาน QA, วิเคราะห์ Log และตรวจสอบคุณภาพระบบ</li>
          <li>พัฒนาทักษะ Frontend ให้แข็งขึ้น (React, Tailwind, State Management)</li>
          <li>พัฒนาด้าน Infrastructure (Docker Compose, Reverse Proxy, Scaling, Monitoring)</li>
        </ul>
      </Card>

      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">ทักษะ</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([k, v]) => (
          <Card key={k}>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{k}</h3>
            </div>
            <div className="mt-4">
              <Badges items={v} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold">ผลงาน</h2>
        <a
          href="https://github.com/Anantha250"
          className="text-sm underline hover:opacity-80"
        >
          ดูทั้งหมดบน GitHub
        </a>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                {p.pill}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.desc}
            </p>
            <div className="mt-3">
              <Badges items={p.tags} />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline hover:opacity-80"
              >
                เปิดโปรเจกต์
              </a>
              <a
                href="https://github.com/Anantha250"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg ring-1 ring-white/15 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">ประสบการณ์</h2>
      <div className="mt-6 grid gap-6">
        {experience.map((e) => (
          <Card key={e.role + e.org}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {e.org}
                </p>
              </div>
              <div className="text-sm text-neutral-500">{e.time}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold">ติดต่อ</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          ยินดีร่วมงาน/ฝึกงานกับทีม{" "}
          <span className="font-medium">
            Software Engineer, QA/Tester, Backend หรือ Full-Stack
          </span>
          ทั้งในองค์กรด้านเทคโนโลยีและธุรกิจหลากหลายรูปแบบ
          หากสนใจสามารถติดต่อได้ทางอีเมล หรือผ่าน GitHub / LinkedIn ด้านล่าง
        </p>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> ananthaxb@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> 095-959-6325
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> ลาดกระบัง กรุงเทพฯ, ไทย
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <a
              className="underline"
              href="https://github.com/Anantha250"
            >
              github.com/Anantha250
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            <a
              className="underline"
              href="https://www.linkedin.com/in/ananthachai-jarnjuea-49913327b/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-10 border-t border-white/10">
    <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
      <div>© {new Date().getFullYear()} Anantachai. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <a className="underline" href="#home">
          Back to top
        </a>
        <a className="underline" href="/cv.pdf">
          Download CV
        </a>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 via-teal-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
