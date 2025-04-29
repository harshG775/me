import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react'
import { Link } from "react-router";

export default function ContactDetailsSection() {
  return (
      <Card>
          <CardHeader>
              <CardTitle>Let's start working together!</CardTitle>
              <CardDescription>
                  <div className="italic">Contact Details</div>
                  <div className="font-semibold italic text-foreground">hgaur491@gmail.com</div>
              </CardDescription>
          </CardHeader>
          <CardContent>
              <div>
                  <div>Socials</div>
                  <ul>
                      <li>
                          <Link to="">Linkedin</Link>
                      </li>
                      <li>
                          <Link to="">Github</Link>
                      </li>
                      <li>
                          <Link to="">Medium</Link>
                      </li>
                      <li>
                          <Link to="">Discord</Link>
                      </li>
                  </ul>
              </div>
          </CardContent>
      </Card>
  );
}
