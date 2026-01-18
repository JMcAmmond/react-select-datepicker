import React from 'react';

interface SelectDatepickerErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  renderFallback?: (error: Error) => React.ReactNode;
}

interface SelectDatepickerErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class SelectDatepickerErrorBoundary extends React.Component<
  SelectDatepickerErrorBoundaryProps,
  SelectDatepickerErrorBoundaryState
> {
  state: SelectDatepickerErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): SelectDatepickerErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error): void {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[SelectDatepicker] Error boundary caught an error:', error);
    }
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback, renderFallback } = this.props;

    if (hasError) {
      if (renderFallback && error) {
        return renderFallback(error);
      }

      return (
        fallback || (
          <div role="alert" style={{ padding: '12px' }}>
            Something went wrong while rendering the date picker.
          </div>
        )
      );
    }

    return children;
  }
}
