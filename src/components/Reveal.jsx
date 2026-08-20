import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, animation = 'animate-reveal', children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? animation : 'opacity-0'}`}
      style={{ animationDelay: visible ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  )
}
