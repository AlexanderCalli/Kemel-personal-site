import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
  onSignIn: (provider: 'github' | 'google') => void
}

export function SignInModal({ isOpen, onClose, onSignIn }: SignInModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button 
            variant="outline" 
            onClick={() => onSignIn('github')}
            className="flex items-center justify-center gap-2"
          >
            <FaGithub /> Continue with GitHub
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onSignIn('google')}
            className="flex items-center justify-center gap-2"
          >
            <FcGoogle /> Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}