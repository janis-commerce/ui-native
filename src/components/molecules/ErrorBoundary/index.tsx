import React, {ReactNode} from 'react';
import ErrorFallback from 'molecules/ErrorBoundary/components/ErrorFallback';

interface ErrorBoundaryProps {
	children: ReactNode;
	renderErrorComponent?: (errorMessage: string) => ReactNode;
	onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
	onMount?: () => void;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
	errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
		};
	}

	static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
		return {hasError: true, error};
	}

	componentDidMount(): void {
		if (this.props.onMount) {
			this.props.onMount();
		}
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({errorInfo});

		if (this.props.onError) {
			this.props.onError(error, errorInfo);
		}
	}

	render() {
		if (this.state.hasError) {
			const {renderErrorComponent} = this.props;

			if (typeof renderErrorComponent === 'function') {
				return renderErrorComponent(this.state.error?.message || '');
			}

			return <ErrorFallback />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
