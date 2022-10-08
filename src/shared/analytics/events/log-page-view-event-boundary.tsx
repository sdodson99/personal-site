import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useLogEvent } from './use-log-event';

type LogPageViewEventBoundaryProps = React.PropsWithChildren;

export const LogPageViewEventBoundary = ({
  children,
}: LogPageViewEventBoundaryProps) => {
  const { logEvent } = useLogEvent();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      logEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, logEvent]);

  return <>{children}</>;
};
