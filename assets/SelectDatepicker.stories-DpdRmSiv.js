import{j as s}from"./jsx-runtime-DM0iHAxA.js";import{R as e}from"./iframe-C3P2kIdD.js";import{S as l}from"./SelectDatepicker-DLRICr8f.js";import"./preload-helper-PPVm8Dsz.js";class y extends e.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a){}render(){const{hasError:a,error:n}=this.state,{children:r,fallback:R,renderFallback:f}=this.props;return a?f&&n?f(n):R||s.jsx("div",{role:"alert",style:{padding:"12px"},children:"Something went wrong while rendering the date picker."}):r}}y.__docgenInfo={description:"",methods:[],displayName:"SelectDatepickerErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},renderFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => React.ReactNode",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const L={title:"SelectDatepicker",component:l,parameters:{layout:"centered"}},c={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement(l,{selectedDate:t,onDateChange:n})}},d={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"With Date Range"),e.createElement(l,{selectedDate:t,onDateChange:n,minDate:new Date("2023-01-01"),maxDate:new Date("2025-12-31")})])}},o={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"With Custom Labels"),e.createElement(l,{selectedDate:t,onDateChange:n,labels:{groupLabel:"Select your travel date",yearLabel:"Year",monthLabel:"Month",dayLabel:"Day",yearPlaceholder:"Select Year",monthPlaceholder:"Select Month",dayPlaceholder:"Select Day"}})])}},i={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"Different Order (Day/Month/Year)"),e.createElement(l,{selectedDate:t,onDateChange:n,order:"day/month/year"})])}},m={render:()=>e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"Disabled State"),e.createElement(l,{selectedDate:new Date,onDateChange:()=>{},disabled:!0})])},p={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"Error State"),e.createElement(l,{id:"error-state",selectedDate:t,onDateChange:n,hasError:!0})])}},h={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"Hidden Labels"),e.createElement(l,{id:"hidden-labels",selectedDate:t,onDateChange:n,hideLabels:!0})])}},u={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},[e.createElement("h3",null,"Reverse Years"),e.createElement(l,{id:"reverse-years",selectedDate:t,onDateChange:n,reverseYears:!0})])}},g={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"420px"}},[e.createElement("h3",null,"Custom Month Labels"),e.createElement(l,{id:"custom-months",selectedDate:t,onDateChange:n,labels:{monthLabel:"Mes",dayLabel:"Día",yearLabel:"Año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",yearPlaceholder:"Selecciona año",months:{1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"}}})])}},D={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"440px"}},[e.createElement("h3",null,"Smart Date Correction"),e.createElement("p",{style:{marginBottom:"12px"}},"Try selecting Jan 31, then switch month to February."),e.createElement(l,{id:"smart-correction",selectedDate:t,onDateChange:n}),t&&e.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},[e.createElement("strong",null,"Selected: "),e.createElement("span",null,t.toDateString())])])}},x={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"460px"}},[e.createElement("h3",null,"Range Limits"),e.createElement("p",{style:{marginBottom:"12px"}},"Range: 2020-01-01 to 2025-12-31"),e.createElement(l,{id:"range-limits",selectedDate:t,onDateChange:n,minDate:new Date(2020,0,1),maxDate:new Date(2025,11,31)}),t&&e.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},[e.createElement("strong",null,"Selected: "),e.createElement("span",null,t.toDateString())])])}},b={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"420px"}},[e.createElement("h3",null,"Invalid Order Fallback"),e.createElement("p",{style:{marginBottom:"12px"}},"Passing an invalid order falls back to month/day/year."),e.createElement(l,{id:"invalid-order",selectedDate:t,onDateChange:n,order:"month-year-day"})])}},S={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"880px"}},[e.createElement("h3",null,"Theming Overrides (CSS Vars)"),e.createElement("p",{style:{marginBottom:"12px"}},"These styles are applied via CSS custom properties on the root element."),e.createElement(l,{id:"theme-overrides",selectedDate:t,onDateChange:n,className:"rsd-theme-sunset"}),e.createElement("style",null,`.rsd-theme-sunset {
            --rsd-gap: 18px;
            --rsd-legend-font-size: 20px;
            --rsd-legend-font-weight: 800;
            --rsd-error-color: #ff00a8;
            --rsd-select-padding: 12px 16px;
            --rsd-select-border: 2px solid #7c3aed;
            --rsd-select-border-radius: 999px;
            --rsd-select-font-size: 16px;
            --rsd-select-disabled-bg: #fdf4ff;
            --rsd-select-disabled-color: #a21caf;
            --rsd-required-color: #16a34a;

            background: radial-gradient(circle at 20% 20%, #fef9c3, #fbcfe8 40%, #c7d2fe 70%, #f0abfc 100%);
            padding: 20px;
            border-radius: 18px;
            border: 2px dashed #0ea5e9;
            box-shadow: 0 12px 30px rgba(14, 165, 233, 0.25), 0 6px 12px rgba(124, 58, 237, 0.2);
            overflow: hidden;
          }

          .rsd-theme-sunset .rsd__select {
            background: linear-gradient(135deg, #fef3c7, #e0f2fe);
            color: #0f172a;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-sunset .rsd__select-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .rsd-theme-sunset .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #7c3aed;
          }

          .rsd-theme-sunset .rsd__error-message {
            background: #fff1f2;
            padding: 8px 12px;
            border-radius: 10px;
          }`)])}},C=()=>{throw new Error("Intentional render error")},E={render:()=>s.jsxs("div",{style:{padding:"20px",maxWidth:"480px"},children:[s.jsx("h3",{children:"Error Boundary"}),s.jsx("p",{style:{marginBottom:"12px"},children:"This example intentionally throws to demonstrate the fallback UI."}),s.jsx(y,{renderFallback:t=>s.jsxs("div",{role:"alert",style:{padding:"12px",borderRadius:"8px",background:"#fff1f2",color:"#9f1239"},children:["Error: ",t.message]}),children:s.jsx(C,{})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange
    });
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'With Date Range'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: new Date('2023-01-01'),
      maxDate: new Date('2025-12-31')
    })]);
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'With Custom Labels'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      labels: {
        groupLabel: 'Select your travel date',
        yearLabel: 'Year',
        monthLabel: 'Month',
        dayLabel: 'Day',
        yearPlaceholder: 'Select Year',
        monthPlaceholder: 'Select Month',
        dayPlaceholder: 'Select Day'
      }
    })]);
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'Different Order (Day/Month/Year)'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      order: 'day/month/year'
    })]);
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'Disabled State'), React.createElement(SelectDatepicker, {
      selectedDate: new Date(),
      onDateChange: () => {},
      disabled: true
    })]);
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'Error State'), React.createElement(SelectDatepicker, {
      id: 'error-state',
      selectedDate: selected,
      onDateChange: handleDateChange,
      hasError: true
    })]);
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'Hidden Labels'), React.createElement(SelectDatepicker, {
      id: 'hidden-labels',
      selectedDate: selected,
      onDateChange: handleDateChange,
      hideLabels: true
    })]);
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, [React.createElement('h3', null, 'Reverse Years'), React.createElement(SelectDatepicker, {
      id: 'reverse-years',
      selectedDate: selected,
      onDateChange: handleDateChange,
      reverseYears: true
    })]);
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '420px'
      }
    }, [React.createElement('h3', null, 'Custom Month Labels'), React.createElement(SelectDatepicker, {
      id: 'custom-months',
      selectedDate: selected,
      onDateChange: handleDateChange,
      labels: {
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
          12: 'Diciembre'
        }
      }
    })]);
  }
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '440px'
      }
    }, [React.createElement('h3', null, 'Smart Date Correction'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Try selecting Jan 31, then switch month to February.'), React.createElement(SelectDatepicker, {
      id: 'smart-correction',
      selectedDate: selected,
      onDateChange: handleDateChange
    }), selected && React.createElement('div', {
      style: {
        marginTop: '10px',
        padding: '10px',
        background: '#f6f8fa'
      }
    }, [React.createElement('strong', null, 'Selected: '), React.createElement('span', null, selected.toDateString())])]);
  }
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '460px'
      }
    }, [React.createElement('h3', null, 'Range Limits'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Range: 2020-01-01 to 2025-12-31'), React.createElement(SelectDatepicker, {
      id: 'range-limits',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 11, 31)
    }), selected && React.createElement('div', {
      style: {
        marginTop: '10px',
        padding: '10px',
        background: '#f6f8fa'
      }
    }, [React.createElement('strong', null, 'Selected: '), React.createElement('span', null, selected.toDateString())])]);
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '420px'
      }
    }, [React.createElement('h3', null, 'Invalid Order Fallback'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Passing an invalid order falls back to month/day/year.'), React.createElement(SelectDatepicker, {
      id: 'invalid-order',
      selectedDate: selected,
      onDateChange: handleDateChange,
      order: 'month-year-day' as unknown as SelectDatepickerOrder
    })]);
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '880px'
      }
    }, [React.createElement('h3', null, 'Theming Overrides (CSS Vars)'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'These styles are applied via CSS custom properties on the root element.'), React.createElement(SelectDatepicker, {
      id: 'theme-overrides',
      selectedDate: selected,
      onDateChange: handleDateChange,
      className: 'rsd-theme-sunset'
    }), React.createElement('style', null, \`.rsd-theme-sunset {
            --rsd-gap: 18px;
            --rsd-legend-font-size: 20px;
            --rsd-legend-font-weight: 800;
            --rsd-error-color: #ff00a8;
            --rsd-select-padding: 12px 16px;
            --rsd-select-border: 2px solid #7c3aed;
            --rsd-select-border-radius: 999px;
            --rsd-select-font-size: 16px;
            --rsd-select-disabled-bg: #fdf4ff;
            --rsd-select-disabled-color: #a21caf;
            --rsd-required-color: #16a34a;

            background: radial-gradient(circle at 20% 20%, #fef9c3, #fbcfe8 40%, #c7d2fe 70%, #f0abfc 100%);
            padding: 20px;
            border-radius: 18px;
            border: 2px dashed #0ea5e9;
            box-shadow: 0 12px 30px rgba(14, 165, 233, 0.25), 0 6px 12px rgba(124, 58, 237, 0.2);
            overflow: hidden;
          }

          .rsd-theme-sunset .rsd__select {
            background: linear-gradient(135deg, #fef3c7, #e0f2fe);
            color: #0f172a;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-sunset .rsd__select-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .rsd-theme-sunset .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #7c3aed;
          }

          .rsd-theme-sunset .rsd__error-message {
            background: #fff1f2;
            padding: 8px 12px;
            border-radius: 10px;
          }\`)]);
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: '20px',
      maxWidth: '480px'
    }}>\r
        <h3>Error Boundary</h3>\r
        <p style={{
        marginBottom: '12px'
      }}>\r
          This example intentionally throws to demonstrate the fallback UI.\r
        </p>\r
        <SelectDatepickerErrorBoundary renderFallback={error => <div role="alert" style={{
        padding: '12px',
        borderRadius: '8px',
        background: '#fff1f2',
        color: '#9f1239'
      }}>\r
              Error: {error.message}\r
            </div>}>\r
          <CrashOnRender />\r
        </SelectDatepickerErrorBoundary>\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};const _=["Default","WithDateRange","WithCustomLabels","DifferentOrder","Disabled","WithErrorState","WithHiddenLabels","WithReverseYears","WithCustomMonths","WithSmartDateCorrection","WithRangeLimits","WithInvalidOrderFallback","WithThemingOverrides","WithErrorBoundary"];export{c as Default,i as DifferentOrder,m as Disabled,o as WithCustomLabels,g as WithCustomMonths,d as WithDateRange,E as WithErrorBoundary,p as WithErrorState,h as WithHiddenLabels,b as WithInvalidOrderFallback,x as WithRangeLimits,u as WithReverseYears,D as WithSmartDateCorrection,S as WithThemingOverrides,_ as __namedExportsOrder,L as default};
