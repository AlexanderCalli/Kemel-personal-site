import Image from 'next/image'
import { FaBriefcase, FaGraduationCap, FaCode, FaLanguage, FaLightbulb } from 'react-icons/fa'

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </div>
)

const JobCard = ({ title, company, period, description }: { title: string; company: string; period: string; description: string }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{company} | {period}</p>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
)

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <Section title="About Page" icon={<FaCode className="text-indigo-500" />}>
        <p className="text-lg mb-4">
          This website was created using the following technologies:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
            'Supabase', 'Vercel', 'GitHub', 'Shadcn UI'
          ].map((tech, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
              <p className="font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </Section>
      <div className="mb-40"></div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Kemel Alex Callisaya Humerez</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">IT Engineer & QA Specialist</p>
      </div>

      <p className="text-lg mb-8 text-center">
        Welcome to my website! I'm passionate about technology and dedicated to ensuring that systems work seamlessly to support business objectives.
      </p>

      <Section title="Professional Background" icon={<FaBriefcase className="text-blue-500" />}>
        <JobCard
          title="IT Technical Support"
          company="Hertie GmbH"
          period="2020-2023"
          description="Procured, configured, and installed critical software systems, managed network architectures, monitored security breaches, and ensured compliance across all operations. Expertise in Azure and Active Directory was crucial in managing and maintaining server environments."
        />
        <JobCard
          title="QA Tester"
          company="Akelius GmbH"
          period="2019-2020"
          description="Contributed significantly to software quality assurance by conducting both manual and automated testing, collaborating closely with DevOps teams, and documenting issues using tools such as JIRA. Ensured that every feature and update adhered to the highest standards of quality."
        />
        <JobCard
          title="Customer Service Representative"
          company="Sky Deutschland"
          period="2018-2019"
          description="Excelled at resolving complex customer inquiries, serving as a bridge between technical teams and customers, and ensuring that all stakeholders were satisfied with the support provided."
        />
        <JobCard
          title="Marketing Intern"
          company="BBraun Melsungen"
          period="2017"
          description="Supported market research and campaign execution, gaining valuable insight into the intersection of IT and business strategy."
        />
        <JobCard
          title="Industrial Management Trainee"
          company="La Papelera S.A."
          period="2016"
          description="Gained hands-on experience in optimizing production processes, managing inventory, and providing IT support for company-wide systems, which contributed to streamlining operations and reducing costs."
        />
      </Section>

      <Section title="Academic Journey" icon={<FaGraduationCap className="text-green-500" />}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Business Informatics</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Technical University of Berlin</p>
          <p className="text-gray-700 dark:text-gray-300">Honed technical skills and business acumen, laying the foundation for a multidisciplinary approach to technology and management.</p>
        </div>
      </Section>

      <Section title="Technical Skills" icon={<FaCode className="text-purple-500" />}>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <p>Python, SQL, SCALA, Java, JavaScript, HTML, CSS, React, Tailwind</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-2">Testing Tools & Frameworks</h3>
            <p>Manual and automated testing, JIRA, Test framework development</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-2">Software Development</h3>
            <p>Agile methodologies, DevOps, Git for version control</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-2">System Administration</h3>
            <p>Azure, Active Directory, Network architecture, Server management</p>
          </div>
        </div>
      </Section>

      <Section title="Languages" icon={<FaLanguage className="text-yellow-500" />}>
        <p className="text-lg">Fluent in English and German at an advanced level, enabling effective collaboration with international teams and clients.</p>
      </Section>

      <Section title="My Approach" icon={<FaLightbulb className="text-orange-500" />}>
        <p className="text-lg mb-4">I aim for precision, consistency, and scalability in all my work. My goal is to deliver value-driven tech solutions with a strong analytical mindset and a proactive approach to problem-solving.</p>
        <p className="text-lg">Outside of work, I'm passionate about sustainable tourism and environmentally responsible technology.</p>
      </Section>

      {/* Add the new Logos section here */}
      <Section title="Logo" icon={<FaCode className="text-indigo-500" />}>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image 
                src="/kemel-logo-light.png"  // Replace with your actual logo path
                alt="Logo on light background"
                layout="fill" 
                objectFit="contain"
                className="p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-center">Logo Light</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image 
                src="/kemel-logo-dark.png"  // Replace with your actual logo path
                alt="Logo on dark background"
                layout="fill" 
                objectFit="contain"
                className="p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-center text-white">Logo Dark</h3>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}