'use client'

import styles from './page.module.css'
import UserProps from './UserProps'
import EventFunctionState from './EventFunctionState'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import custom from './custom.module.css'
import { Roboto } from 'next/font/google'

const roboto= Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name)
  }

  return (
    <div className={styles.main}>
      {/* Props */}
      <UserProps name="Prijitha Ezhava" />

      {/* Event, Function and State */}
      <EventFunctionState />

      {/* Link */}
      <Link href="/login">Go To Login Page</Link><br /><br />
      <Link href="/about">Go To About Page</Link><br /><br />

      {/* Navigation */}
      <button onClick={() => navigate("/login")}>Go To Login Page</button><br /><br />
      <button onClick={() => navigate("/study")}>Go To Study Page</button><br /><br />
      <button onClick={() => navigate("/clientproductlist")}>Go To Client Product List Page</button><br /><br />
      <button onClick={() => navigate("/serverproductlist")}>Go To Server Product List Page</button><br /><br />
      <button onClick={() => navigate("/stylecss")}>Go To Style Page</button><br /><br />

      {/* Module.css */}
      <button onClick={() => navigate("/custommodule")}>Go To Custom Module CSS Page</button><br /><br />
      <h2 className={custom.main}>Custom Module CSS in Next JS</h2><br />

      {/* Condition style */}
      <button onClick={() => navigate("/conditionstyle")}>Go To Custom Module CSS Page</button><br /><br />

      {/* Image Component */}
      <button onClick={() => navigate("/imgcomponent")}>Image Component</button>

      {/* Font Optimization */}
      <h1>Font Optimization in Next JS</h1>
      {/* <h1 style={{fontFamily:"Roboto",fontWeight:100}}>Font with Link Tag</h1> */}
      <h1 className={roboto.className}>Font with Next JS font feature</h1>
    </div>
  )
}

