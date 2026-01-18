import React from 'react';
import DemoPicker from './DemoPicker';

export default {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
  },
};

export const Welcome = {
  render: () => (
    <div style={{ maxWidth: '800px', padding: '40px' }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          * {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .center { 
            text-align: center; 
          }

          .header {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            margin: 0 auto 3rem;
            align-items: center;
          }

          .sub-heading {
            font-size: 20px;
            font-weight: 300;
            color: #666;
            margin: 16px 0;
            line-height: 1.4;
          }

          .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .demo {
            margin: 20px 0;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid rgba(0,0,0,0.2);
          }

          .demo .rsd-theme-sunset {
            --rsd-gap: 12px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #b42318;
            --rsd-select-padding: 10px 12px;
            --rsd-select-border-radius: 10px;
            --rsd-select-font-size: 15px;
            --rsd-select-disabled-bg: #fff7ed;
            --rsd-select-disabled-color: #9a3412;
            --rsd-required-color: #9a3412;
          }

          h2 {
            color: #333;
            border-bottom: 2px solid #e1e4e8;
            padding-bottom: 8px;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          pre {
            background: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            border: 1px solid #e1e4e8;
            margin: 12px 0;
          }

          code {
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 14px;
            line-height: 1.45;
            color: #24292e;
          }

          a {
            text-decoration: none;
          }

          a:hover img {
            opacity: 0.8;
            transition: opacity 0.2s ease;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          section {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #24292e;
          }
        `,
        }}
      />

      <section className="center header">
        <img
          src="https://raw.githubusercontent.com/JMcAmmond/public-assets/main/logo.svg"
          alt="Select Datepicker"
          style={{ marginBottom: '1rem', maxWidth: '300px' }}
        />

        <p className="sub-heading">
          A simple and reusable dropdown datepicker component for React.
        </p>

        <div className="badges flex-center" style={{ gap: '8px' }}>
          <a
            href="https://www.npmjs.com/package/react-select-datepicker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.shields.io/npm/v/react-select-datepicker.svg" alt="NPM version" />
          </a>
          <img
            src="https://img.shields.io/bundlephobia/min/react-select-datepicker"
            alt="Bundle size"
          />
          <img
            src="https://img.shields.io/github/contributors/jmcammond/react-select-datepicker"
            alt="GitHub contributors"
          />
          <img src="https://img.shields.io/npm/dt/react-select-datepicker" alt="NPM downloads" />
          <img src="https://img.shields.io/npm/l/react-select-datepicker" alt="License" />
        </div>
      </section>

      <div className="flex-center demo">
        <div>
          <DemoPicker />
        </div>
      </div>

      <section style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2>Install</h2>
        <pre>
          <code>npm install --save react-select-datepicker</code>
        </pre>

        <h2>Usage</h2>
        <pre>
          <code>{`import React, { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date | null) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      selectedDate={value}
      onDateChange={onDateChange}
    />
  );
};`}</code>
        </pre>
      </section>
    </div>
  ),
};
