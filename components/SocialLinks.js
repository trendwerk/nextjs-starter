import { useContext } from 'react'
import Data from 'components/Data'
import Link from 'components/Link'

export default function SocialLinks() {
  const { general } = useContext(Data)
  let links = []

  if (general.facebook) {
    links.push({
      name: 'facebook',
      url: general.facebook,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.397 16V8.844H4V6h2.397V3.76c0-2.435 1.487-3.76 3.66-3.76 1.04 0 1.934.078 2.193.113v2.543h-1.506c-1.181 0-1.41.563-1.41 1.385V6H12l-.366 2.844h-2.3V16" />
        </svg>
      ),
    })
  }

  if (general.instagram) {
    links.push({
      name: 'instagram',
      url: general.instagram,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.002 3.897A4.095 4.095 0 0 0 3.9 7.998 4.095 4.095 0 0 0 8 12.1 4.095 4.095 0 0 0 12.104 8a4.095 4.095 0 0 0-4.101-4.102zm0 6.768a2.671 2.671 0 0 1-2.667-2.667 2.669 2.669 0 0 1 2.667-2.666 2.669 2.669 0 0 1 2.666 2.666c0 1.47-1.2 2.667-2.666 2.667zm5.225-6.936a.954.954 0 0 1-.956.957.957.957 0 1 1 .957-.957zm2.717.971c-.06-1.281-.354-2.416-1.292-3.352C13.716.413 12.582.12 11.3.056c-1.32-.075-5.28-.075-6.6 0-1.278.06-2.413.354-3.352 1.289C.41 2.28.12 3.415.056 4.696c-.075 1.321-.075 5.28 0 6.6.06 1.282.354 2.417 1.292 3.352.94.935 2.07 1.228 3.352 1.292 1.32.075 5.28.075 6.6 0 1.281-.06 2.416-.353 3.352-1.292.935-.935 1.228-2.07 1.292-3.352.075-1.32.075-5.275 0-6.596zm-1.706 8.013a2.7 2.7 0 0 1-1.521 1.521c-1.053.418-3.552.321-4.715.321-1.164 0-3.666.093-4.715-.321a2.7 2.7 0 0 1-1.521-1.52c-.418-1.054-.321-3.552-.321-4.716 0-1.163-.093-3.666.321-4.715a2.7 2.7 0 0 1 1.52-1.52c1.054-.418 3.552-.322 4.716-.322 1.163 0 3.666-.093 4.715.321a2.7 2.7 0 0 1 1.52 1.521c.418 1.053.322 3.552.322 4.715 0 1.164.096 3.666-.321 4.715z" />
        </svg>
      ),
    })
  }

  if (general.linkedin) {
    links.push({
      name: 'linkedin',
      url: general.linkedin,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.581 15.996H.264V5.316h3.317v10.68zM1.921 3.86C.861 3.86 0 2.98 0 1.92a1.922 1.922 0 0 1 3.842 0c0 1.06-.86 1.939-1.921 1.939zm14.075 12.136h-3.31v-5.198c0-1.24-.025-2.828-1.724-2.828-1.725 0-1.989 1.346-1.989 2.738v5.288H5.659V5.316h3.182v1.457h.046c.443-.839 1.525-1.724 3.139-1.724 3.356 0 3.974 2.21 3.974 5.08v5.867h-.004z" />
        </svg>
      ),
    })
  }

  if (general.pinterest) {
    links.push({
      name: 'pinterest',
      url: general.pinterest,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.988.048A7.95 7.95 0 0 0 .036 8a7.944 7.944 0 0 0 5.05 7.403c-.071-.633-.13-1.588.024-2.28.144-.622.932-3.953.932-3.953s-.239-.477-.239-1.182c0-1.11.645-1.934 1.433-1.934.68 0 1.003.513 1.003 1.122 0 .68-.43 1.708-.657 2.65-.191.789.394 1.434 1.182 1.434 1.41 0 2.496-1.493 2.496-3.642 0-1.899-1.373-3.236-3.32-3.236-2.256 0-3.594 1.696-3.594 3.45 0 .681.263 1.422.597 1.816.06.083.072.143.06.227-.06.25-.191.788-.215.895-.036.143-.12.18-.263.108-.99-.466-1.612-1.91-1.612-3.081 0-2.507 1.827-4.812 5.254-4.812 2.758 0 4.896 1.97 4.896 4.585 0 2.734-1.732 4.943-4.12 4.943-.8 0-1.564-.417-1.827-.907l-.49 1.887c-.178.692-.668 1.552-.99 2.09A7.95 7.95 0 0 0 15.94 7.988c0-4.383-3.558-7.941-7.952-7.941z" />
        </svg>
      ),
    })
  }

  if (general.twitter) {
    links.push({
      name: 'twitter',
      url: general.twitter,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.355 5.239c.01.142.01.284.01.426 0 4.335-3.299 9.33-9.33 9.33A9.267 9.267 0 0 1 0 13.523c.264.03.518.04.792.04a6.567 6.567 0 0 0 4.07-1.4 3.285 3.285 0 0 1-3.065-2.275c.203.03.406.051.62.051.294 0 .588-.04.862-.112A3.28 3.28 0 0 1 .65 6.61v-.04c.437.243.945.395 1.483.416A3.277 3.277 0 0 1 .67 4.254c0-.61.162-1.168.447-1.655A9.321 9.321 0 0 0 7.878 6.03a3.702 3.702 0 0 1-.081-.75A3.278 3.278 0 0 1 11.077 2c.943 0 1.796.396 2.395 1.036a6.456 6.456 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.441 1.807c.66-.071 1.3-.254 1.888-.508a7.049 7.049 0 0 1-1.645 1.696z" />
        </svg>
      ),
    })
  }

  if (general.youtube) {
    links.push({
      name: 'youtube',
      url: general.youtube,
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.666 3.76a2.01 2.01 0 0 0-1.415-1.423C13.003 2 8 2 8 2s-5.003 0-6.251.337A2.01 2.01 0 0 0 .334 3.76C0 5.016 0 7.636 0 7.636s0 2.62.334 3.876a1.98 1.98 0 0 0 1.415 1.401C2.997 13.25 8 13.25 8 13.25s5.003 0 6.251-.337a1.98 1.98 0 0 0 1.415-1.4C16 10.256 16 7.635 16 7.635s0-2.62-.334-3.876zm-9.302 6.255V5.257l4.181 2.38-4.181 2.378z" />
        </svg>
      ),
    })
  }

  return links.length > 0 ? (
    <div className="flex flex-wrap">
      {links.map((link) => (
        <Link
          className="
            border-2
            border-white
            duration-200
            flex
            h-10
            hover:bg-white
            hover:text-gray-800
            items-center
            justify-center
            mr-2
            mb-2
            rounded-full
            text-white
            transition-color
            w-10
          "
          href={link.url}
          title={`Follow us on ${link.name}`}
          key={link.name}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  ) : null
}
