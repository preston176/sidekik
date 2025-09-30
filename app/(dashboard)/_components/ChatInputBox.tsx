import { Button } from '@/components/ui/button'
import { Mic, Paperclip, Send } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'

function ChatInputBox() {
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)
    const suggestions = [
        'Ask: "Summarize my meeting notes from yesterday"',
        'Try: "Create a project brief for the Q4 launch"',
        'Ask: "Generate a list of prompts for onboarding"',
        'Try: "Explain Maslow\'s Hierarchy in simple terms"',
    ]
    const [suggestionIndex, setSuggestionIndex] = useState(0)
    const intervalRef = useRef<number | null>(null)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const text = value.trim()
        if (!text) return
        // TODO: wire send logic
        console.log('send', text)
        setValue('')
    }

    useEffect(() => {
        // Only rotate when input is empty and not focused
        if (value.trim() !== '' || focused) {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = window.setInterval(() => {
            setSuggestionIndex((i) => (i + 1) % suggestions.length)
        }, 3500)

        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [value, focused, suggestions.length])

    return (
        <div className="relative">
            {/* Chat input section fixed to bottom */}
            <div className="fixed bottom-0 left-0 w-full flex justify-center px-4 pb-6">
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                    <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-3 shadow-sm">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            type="text"
                            placeholder={
                                value.trim() === '' && !focused
                                    ? suggestions[suggestionIndex]
                                    : 'Type a message...'
                            }
                            className="flex-1 bg-transparent border-0 px-2 py-1 text-sm outline-none"
                            aria-label="Chat input"
                        />

                        <Button type="button" variant="ghost"  size="icon" aria-label="Attach file">
                            <Paperclip className="size-5" />
                        </Button>

                        <div className="flex items-center gap-2">
                            <Button type="button" variant="ghost" size="icon" aria-label="Record voice">
                                <Mic />
                            </Button>
                            <Button type="submit" size="icon" aria-label="Send message">
                                <Send />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatInputBox
