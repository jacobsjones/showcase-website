import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Layers,
  ArrowUpRight
} from 'lucide-react'
import TiltCard from '../components/TiltCard'

const features = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning interfaces that captivate users and drive engagement through thoughtful design principles.',
    color: '#00f5ff',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern technologies and best practices for optimal user experiences.',
    color: '#b829dd',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications that deliver native-like experiences on both iOS and Android devices.',
    color: '#ff2d95',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    icon: Globe,
    title: '3D & WebGL',
    description: 'Creating immersive 3D experiences and interactive visualizations that push the boundaries of web technology.',
    color: '#4facfe',
    tags: ['Three.js', 'WebGL', 'Blender'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for lightning-fast load times and smooth interactions that keep users engaged.',
    color: '#00f5ff',
    tags: ['Core Web Vitals', 'CDN', 'Caching'],
  },
  {
    icon: Layers,
    title: 'Motion Design',
    description: 'Bringing interfaces to life with purposeful animations and micro-interactions that enhance user experience.',
    color: '#b829dd',
    tags: ['Framer Motion', 'GSAP', 'Lottie'],
  },
]

const projects = [
  {
    title: 'Neon Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: '#00f5ff',
  },
  {
    title: 'Ethereal Ecommerce',
    category: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: '#b829dd',
  },
  {
    title: 'Crypto Vision',
    category: 'Finance App',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    color: '#ff2d95',
  },
]

export default function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm text-text-secondary">What I Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Services & </span>
            <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Transforming ideas into reality with a comprehensive suite of digital services
            tailored to elevate your brand and engage your audience.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="h-full p-8 glass-card rounded-2xl group hover:border-white/20 transition-colors duration-500">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                      border: `1px solid ${feature.color}40`,
                    }}
                  >
                    <feature.icon 
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: feature.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-muted border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A selection of recent work showcasing creativity and technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <TiltCard className="h-full" tiltAmount={8}>
                  <div className="relative h-full group cursor-pointer overflow-hidden rounded-2xl">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div 
                        className="text-xs font-medium mb-2 uppercase tracking-wider"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 100px ${project.color}20`,
                      }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
