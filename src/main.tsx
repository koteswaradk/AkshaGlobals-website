import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

class AppErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('The website failed to render.', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeContent: 'center',
            gap: '1rem',
            padding: '2rem',
            background: '#020b1a',
            color: '#fff',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          <h1>We couldn’t load the website</h1>
          <p>Please refresh the page to try again.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              justifySelf: 'center',
              padding: '0.75rem 1.25rem',
              border: 0,
              borderRadius: '9999px',
              background: '#22d3ee',
              color: '#020b1a',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Refresh page
          </button>
        </main>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
)
