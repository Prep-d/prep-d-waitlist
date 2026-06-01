import Link from "next/link"
import { Utensils } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <Utensils className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            Prep&apos;d
          </Link>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prep&apos;d
          </p>
        </div>
      </div>
    </footer>
  )
}
