import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales } from './config';

/**
 * Component for creating links. React Component that enables client-side transitions between routes.
 * @important Use this components instead core NextJs components for useful next-intl
 * @type {Function}
 */
export const Link = createSharedPathnamesNavigation({
  locales,
  localePrefix,
}).Link;

/**
 * Function for redirection. When used in a streaming context, this will insert a meta tag to redirect the user to the target page.
 * When used in a custom app route, it will serve a 307/303 to the caller.
 * @important Use this components instead core NextJs components for useful next-intl
 * @param url the url to redirect to
 * @type {Function}
 */
export const redirect = createSharedPathnamesNavigation({
  locales,
  localePrefix,
}).redirect;

/**
 * Hook for accessing the current pathname.
 * Get the current pathname. For example usePathname() on /dashboard?foo=bar would return "/dashboard"
 * @important Use this components instead core NextJs components for useful next-intl
 * @type {Function}
 */
export const usePathname = createSharedPathnamesNavigation({
  locales,
  localePrefix,
}).usePathname;

/**
 * Hook for accessing the router.
 * Get the router methods. For example router.push('/dashboard')
 * @important Use this components instead core NextJs components for useful next-intl
 * @type {Function}
 */
export const useRouter = createSharedPathnamesNavigation({
  locales,
  localePrefix,
}).useRouter;

//  /**
//   * Represents a user object.
//   * @typedef {Object} User
//   * @property {string} name - The name of the user.
//   * @property {number} age - The age of the user.
//   */

//  /**
//   * Represents a user object with additional details.
//   */
//  type User = {
//    /**
//     * The name of the user.
//     */
//    name: string;

//    /**
//     * The age of the user.
//     */
//    age: number;
//  };
