import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ courseName }) {
  const navigation = [
    { name: courseName, href: "#", current: true },
    {
      name: "Section 1: Day 1",
      current: false,
      children: [
        { name: "Engineering", href: "#" },
        { name: "Human Resources", href: "#" },
        { name: "Customer Success", href: "#" },
      ],
    },
    {
      name: "Section 2: Day 2",
      current: false,
      children: [
        { name: "GraphQL API", href: "#" },
        { name: "iOS App", href: "#" },
        { name: "Android App", href: "#" },
        { name: "New Customer Portal", href: "#" },
      ],
    },
    {
      name: "Section 3: Day 3",
      current: false,
      children: [
        { name: "GraphQL API", href: "#" },
        { name: "iOS App", href: "#" },
        { name: "Android App", href: "#" },
        { name: "New Customer Portal", href: "#" },
      ],
    },
  ];

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r min-h-screen border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "" : "hover:bg-gray-50",
                        "block rounded-md py-2 pr-2 pl-10 text-lg font-bold text-black"
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 border-gray-400 py-2.5 text-left text-base border-b font-semibold text-gray-700"
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-black group-data-open:rotate-90 group-data-open:text-black font-bold"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700"
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
