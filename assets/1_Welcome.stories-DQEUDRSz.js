import{j as e}from"./jsx-runtime-Bu-hD8B3.js";import{r as a}from"./iframe-CAuiQoWu.js";import{S as n}from"./SelectDatepicker-C4FRW4Et.js";import"./preload-helper-PPVm8Dsz.js";const s=()=>{const[t,o]=a.useState(null),l=a.useCallback(d=>{o(d)},[]);return e.jsx(e.Fragment,{children:e.jsx(n,{value:t,onChange:l,className:"rsd-theme-sunset",hideLabels:!0,labels:{groupLabel:"Select a date"}})})};s.__docgenInfo={description:"",methods:[],displayName:"DemoPickerComponent"};const g={title:"Welcome",parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}}},r={render:()=>e.jsxs("div",{style:{maxWidth:"800px",padding:"40px"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(30, 64, 175, 0.5);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.25);
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
        `}}),e.jsxs("section",{className:"center header",children:[e.jsx("img",{src:"https://raw.githubusercontent.com/JMcAmmond/public-assets/main/logo.svg",alt:"Select Datepicker",style:{marginBottom:"1rem",maxWidth:"300px"}}),e.jsx("p",{className:"sub-heading",children:"A simple and reusable dropdown datepicker component for React."}),e.jsxs("div",{className:"badges flex-center",style:{gap:"8px"},children:[e.jsx("a",{href:"https://www.npmjs.com/package/react-select-datepicker",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:"https://img.shields.io/npm/v/react-select-datepicker.svg",alt:"NPM version"})}),e.jsx("img",{src:"https://img.shields.io/bundlephobia/min/react-select-datepicker",alt:"Bundle size"}),e.jsx("img",{src:"https://img.shields.io/github/contributors/jmcammond/react-select-datepicker",alt:"GitHub contributors"}),e.jsx("img",{src:"https://img.shields.io/npm/dt/react-select-datepicker",alt:"NPM downloads"}),e.jsx("img",{src:"https://img.shields.io/npm/l/react-select-datepicker",alt:"License"})]})]}),e.jsx("div",{className:"flex-center demo",children:e.jsx("div",{children:e.jsx(s,{})})}),e.jsxs("section",{style:{maxWidth:"700px",margin:"0 auto"},children:[e.jsx("h2",{children:"Install"}),e.jsx("pre",{children:e.jsx("code",{children:"npm install --save react-select-datepicker"})}),e.jsx("h2",{children:"Usage"}),e.jsx("pre",{children:e.jsx("code",{children:`import React, { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onChange = useCallback((date: Date | null) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      value={value}
      onChange={onChange}
      labels={{
        groupLabel: 'Select your date',
      }}
    />
  );
};`})}),e.jsx("h2",{children:"API"}),e.jsx("pre",{children:e.jsx("code",{children:`Props:
- value?: Date | null (preferred)
- onChange?: (date: Date | null) => void (preferred)
- selectedDate?: Date | null (legacy)
- onDateChange?: (date: Date | null) => void (legacy)
- minDate?: Date / maxDate?: Date
- order?: 'month/day/year' | 'day/month/year' | ...
- reverseYears?: boolean
- hideLabels?: boolean
- disabled?: boolean
- hasError?: boolean
- labels?: { groupLabel?, monthLabel?, dayLabel?, yearLabel?, monthPlaceholder?, dayPlaceholder?, yearPlaceholder?, months? }
`})}),e.jsx("h2",{children:"Examples"}),e.jsx("pre",{children:e.jsx("code",{children:`// Date range
<SelectDatepicker
  value={value}
  onChange={onChange}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
/>

// Custom order + reverse years
<SelectDatepicker
  value={value}
  onChange={onChange}
  order="day/month/year"
  reverseYears
/>

// Custom labels and months
<SelectDatepicker
  value={value}
  onChange={onChange}
  labels={{
    groupLabel: 'Travel date',
    monthLabel: 'Mes',
    dayLabel: 'Día',
    yearLabel: 'Año',
    monthPlaceholder: 'Selecciona mes',
    dayPlaceholder: 'Selecciona día',
    yearPlaceholder: 'Selecciona año',
    months: {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre',
    },
  }}
/>

// Error boundary
<SelectDatepickerErrorBoundary
  renderFallback={(error) => <div role="alert">Error: {error.message}</div>}
>
  <SelectDatepicker value={value} onChange={onChange} />
</SelectDatepickerErrorBoundary>
`})}),e.jsx("h2",{children:"Style overrides (CSS variables)"}),e.jsxs("p",{children:["Apply CSS variables on the root element (the wrapper with",e.jsx("code",{children:"rsd__react-select-datepicker"}),") or pass a custom className."]}),e.jsx("pre",{children:e.jsx("code",{children:`<SelectDatepicker
  value={value}
  onChange={onChange}
  className="my-datepicker-theme"
/>`})}),e.jsx("pre",{children:e.jsx("code",{children:`.my-datepicker-theme {
  --rsd-gap: 12px;
  --rsd-legend-font-size: 18px;
  --rsd-legend-font-weight: 700;
  --rsd-error-color: #b42318;
  --rsd-select-padding: 10px 12px;
  --rsd-select-border-radius: 10px;
  --rsd-select-font-size: 15px;
  --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --rsd-select-hover-border: rgba(30, 64, 175, 0.5);
  --rsd-select-focus-border: #2563eb;
  --rsd-select-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.25);
  --rsd-select-disabled-bg: #fff7ed;
  --rsd-select-disabled-color: #9a3412;
  --rsd-required-color: #9a3412;
}`})}),e.jsx("h3",{children:"Available variables"}),e.jsx("pre",{children:e.jsx("code",{children:`--rsd-gap
--rsd-legend-font-size
--rsd-legend-font-weight
--rsd-legend-margin-bottom
--rsd-error-color
--rsd-error-font-size
--rsd-error-margin-top
--rsd-required-color
--rsd-required-margin-left
--rsd-label-margin-bottom
--rsd-select-padding
--rsd-select-border
--rsd-select-border-radius
--rsd-select-font-size
--rsd-select-font-family
--rsd-select-line-height
--rsd-select-hover-border
--rsd-select-focus-border
--rsd-select-focus-ring
--rsd-select-disabled-bg
--rsd-select-disabled-color`})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '800px',
    padding: '40px'
  }}>\r
      <style dangerouslySetInnerHTML={{
      __html: \`
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
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(30, 64, 175, 0.5);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.25);
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
        \`
    }} />\r
\r
      <section className="center header">\r
        <img src="https://raw.githubusercontent.com/JMcAmmond/public-assets/main/logo.svg" alt="Select Datepicker" style={{
        marginBottom: '1rem',
        maxWidth: '300px'
      }} />\r
\r
        <p className="sub-heading">\r
          A simple and reusable dropdown datepicker component for React.\r
        </p>\r
\r
        <div className="badges flex-center" style={{
        gap: '8px'
      }}>\r
          <a href="https://www.npmjs.com/package/react-select-datepicker" target="_blank" rel="noopener noreferrer">\r
            <img src="https://img.shields.io/npm/v/react-select-datepicker.svg" alt="NPM version" />\r
          </a>\r
          <img src="https://img.shields.io/bundlephobia/min/react-select-datepicker" alt="Bundle size" />\r
          <img src="https://img.shields.io/github/contributors/jmcammond/react-select-datepicker" alt="GitHub contributors" />\r
          <img src="https://img.shields.io/npm/dt/react-select-datepicker" alt="NPM downloads" />\r
          <img src="https://img.shields.io/npm/l/react-select-datepicker" alt="License" />\r
        </div>\r
      </section>\r
\r
      <div className="flex-center demo">\r
        <div>\r
          <DemoPicker />\r
        </div>\r
      </div>\r
\r
      <section style={{
      maxWidth: '700px',
      margin: '0 auto'
    }}>\r
        <h2>Install</h2>\r
        <pre>\r
          <code>npm install --save react-select-datepicker</code>\r
        </pre>\r
\r
        <h2>Usage</h2>\r
        <pre>\r
          <code>{\`import React, { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onChange = useCallback((date: Date | null) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      value={value}
      onChange={onChange}
      labels={{
        groupLabel: 'Select your date',
      }}
    />
  );
};\`}</code>\r
        </pre>\r
\r
        <h2>API</h2>\r
        <pre>\r
          <code>{\`Props:
- value?: Date | null (preferred)
- onChange?: (date: Date | null) => void (preferred)
- selectedDate?: Date | null (legacy)
- onDateChange?: (date: Date | null) => void (legacy)
- minDate?: Date / maxDate?: Date
- order?: 'month/day/year' | 'day/month/year' | ...
- reverseYears?: boolean
- hideLabels?: boolean
- disabled?: boolean
- hasError?: boolean
- labels?: { groupLabel?, monthLabel?, dayLabel?, yearLabel?, monthPlaceholder?, dayPlaceholder?, yearPlaceholder?, months? }
\`}</code>\r
        </pre>\r
\r
        <h2>Examples</h2>\r
        <pre>\r
          <code>{\`// Date range
<SelectDatepicker
  value={value}
  onChange={onChange}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
/>

// Custom order + reverse years
<SelectDatepicker
  value={value}
  onChange={onChange}
  order="day/month/year"
  reverseYears
/>

// Custom labels and months
<SelectDatepicker
  value={value}
  onChange={onChange}
  labels={{
    groupLabel: 'Travel date',
    monthLabel: 'Mes',
    dayLabel: 'Día',
    yearLabel: 'Año',
    monthPlaceholder: 'Selecciona mes',
    dayPlaceholder: 'Selecciona día',
    yearPlaceholder: 'Selecciona año',
    months: {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre',
    },
  }}
/>

// Error boundary
<SelectDatepickerErrorBoundary
  renderFallback={(error) => <div role="alert">Error: {error.message}</div>}
>
  <SelectDatepicker value={value} onChange={onChange} />
</SelectDatepickerErrorBoundary>
\`}</code>\r
        </pre>\r
\r
        <h2>Style overrides (CSS variables)</h2>\r
        <p>\r
          Apply CSS variables on the root element (the wrapper with\r
          <code>rsd__react-select-datepicker</code>) or pass a custom className.\r
        </p>\r
        <pre>\r
          <code>{\`<SelectDatepicker
  value={value}
  onChange={onChange}
  className="my-datepicker-theme"
/>\`}</code>\r
        </pre>\r
        <pre>\r
          <code>{\`.my-datepicker-theme {
  --rsd-gap: 12px;
  --rsd-legend-font-size: 18px;
  --rsd-legend-font-weight: 700;
  --rsd-error-color: #b42318;
  --rsd-select-padding: 10px 12px;
  --rsd-select-border-radius: 10px;
  --rsd-select-font-size: 15px;
  --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --rsd-select-hover-border: rgba(30, 64, 175, 0.5);
  --rsd-select-focus-border: #2563eb;
  --rsd-select-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.25);
  --rsd-select-disabled-bg: #fff7ed;
  --rsd-select-disabled-color: #9a3412;
  --rsd-required-color: #9a3412;
}\`}</code>\r
        </pre>\r
\r
        <h3>Available variables</h3>\r
        <pre>\r
          <code>{\`--rsd-gap
--rsd-legend-font-size
--rsd-legend-font-weight
--rsd-legend-margin-bottom
--rsd-error-color
--rsd-error-font-size
--rsd-error-margin-top
--rsd-required-color
--rsd-required-margin-left
--rsd-label-margin-bottom
--rsd-select-padding
--rsd-select-border
--rsd-select-border-radius
--rsd-select-font-size
--rsd-select-font-family
--rsd-select-line-height
--rsd-select-hover-border
--rsd-select-focus-border
--rsd-select-focus-ring
--rsd-select-disabled-bg
--rsd-select-disabled-color\`}</code>\r
        </pre>\r
      </section>\r
    </div>
}`,...r.parameters?.docs?.source}}};const h=["Welcome"];export{r as Welcome,h as __namedExportsOrder,g as default};
