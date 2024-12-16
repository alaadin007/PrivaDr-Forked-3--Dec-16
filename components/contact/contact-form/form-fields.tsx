"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form"
import { ContactFormData } from "./form-schema"

interface FormFieldsProps {
  form: UseFormReturn<ContactFormData>
}

export function FormFields({ form }: FormFieldsProps) {
  const { register, watch, setValue } = form
  const requestCallback = watch("requestCallback")

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" {...register("phone")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <Select 
          onValueChange={(value) => setValue("service", value as ContactFormData["service"])}
          defaultValue="Other"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ADHD Assessment">ADHD Assessment</SelectItem>
            <SelectItem value="General Practice">General Practice</SelectItem>
            <SelectItem value="IV Therapy">IV Therapy</SelectItem>
            <SelectItem value="Weight Loss">Weight Loss</SelectItem>
            <SelectItem value="MedSpa">MedSpa</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="requestCallback"
          checked={requestCallback}
          onCheckedChange={(checked) => setValue("requestCallback", checked)}
        />
        <Label htmlFor="requestCallback">Request a callback</Label>
      </div>

      {requestCallback && (
        <div className="space-y-2">
          <Label htmlFor="preferredTime">Preferred Time for Callback</Label>
          <Select 
            onValueChange={(value) => setValue("preferredTime", value)}
            defaultValue=""
          >
            <SelectTrigger>
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Please describe how we can help you..."
        />
      </div>
    </div>
  )
}