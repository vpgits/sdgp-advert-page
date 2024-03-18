import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 px-4">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Pricing Plans</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
          Start with a 14-day free trial. No credit card required.
        </p>
      </div>

      <div className="container grid gap-6 md:gap-8 lg:grid-cols-3 xl:px-0 lg:mr-10">
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Basic</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">
            For individuals just getting started.
          </p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              1 user
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Basic analytics
            </li>
          </ul>
          <Button> Learn more </Button>
        </div>
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Pro</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">For teams looking to collaborate.</p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              5 users
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Advanced analytics
            </li>
          </ul>
          <Button>Learn more</Button>
        </div>
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Enterprise</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">For organizations that need control.</p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              10 users
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Advanced analytics
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              SSO & security features
            </li>
          </ul>
          <Button size="lg">Contact sales</Button>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
