"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/resources";
import { Flex, Spinner} from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setIsRouteEnabled(false);

      const checkRouteEnabled = () => {
        if (!pathname) return false;

        if (pathname in routes) {
          return routes[pathname as keyof typeof routes];
        }

        const dynamicRoutes = ["/blog", "/work"] as const;
        for (const route of dynamicRoutes) {
          if (pathname?.startsWith(route) && routes[route]) {
            return true;
          }
        }

        return false;
      };

      const routeEnabled = checkRouteEnabled();
      setIsRouteEnabled(routeEnabled);

      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
		return <NotFound />;
	}

  // if (isPasswordRequired && !isAuthenticated) {
  //   return (
  //     <Column paddingY="128" maxWidth={24} gap="24" center>
  //       <Heading align="center" wrap="balance">
  //         This page is password protected
  //       </Heading>
  //       <Column fillWidth gap="8" horizontal="center">
  //         <PasswordInput
  //           id="password"
  //           label="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           errorMessage={error}
  //         />
  //         <Button onClick={handlePasswordSubmit}>Submit</Button>
  //       </Column>
  //     </Column>
  //   );
  // }

  return <>{children}</>;
};

export { RouteGuard };
