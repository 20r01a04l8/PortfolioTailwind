"use client"
import { useState } from "react"
import axios from "axios"

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'', honeypot:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const submit = async (e: any) => {
    e.preventDefault()
    if (form.honeypot) return
    setStatus('sending')
    try {
      await axios.post((process.env.NEXT_PUBLIC_API_URL || '') + '/contact', {
        name: form.name, email: form.email, message: form.message
      })
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="max-w-lg space-y-3">
      <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" required className="w-full border p-2 rounded" />
      <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" type="email" required className="w-full border p-2 rounded" />
      <input value={form.honeypot} style={{ display: 'none' }} onChange={e=>setForm({...form, honeypot:e.target.value})} placeholder="Leave empty" />
      <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={6} required className="w-full border p-2 rounded" />
      <div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded" disabled={status==='sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
      <div>
        {status === 'sent' && <p className="text-green-600">Thanks — message sent!</p>}
        {status === 'error' && <p className="text-red-600">Error. Try again later.</p>}
      </div>
    </form>
  )
}
