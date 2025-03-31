import React, {ReactNode} from 'react';
import ErrorFallback from 'organisms/ErrorBoundary/components/ErrorFallback';

interface ErrorBoundaryProps {
	children: ReactNode;
	onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
	onButtonPress?: () => void;
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

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({errorInfo});

		if (this.props.onError) {
			this.props.onError(error, errorInfo);
		}
	}

	handleRetry = () => {
		this.setState({hasError: false, error: null, errorInfo: null}, () => {
			if (this.props.onButtonPress) {
				this.props.onButtonPress();
			}
		});
	};

	render() {
		if (this.state.hasError) {
			return (
				<ErrorFallback
					onButtonPress={this.handleRetry}
					error={this.state.error?.message}
					errorDetails={this.state.errorInfo?.componentStack}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
