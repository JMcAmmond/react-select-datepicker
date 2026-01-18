import{j as d}from"./jsx-runtime-DbGwL0xT.js";import{R as e}from"./iframe-BkHhrT6h.js";import{S as l}from"./SelectDatepicker-CFpfacyU.js";import"./preload-helper-PPVm8Dsz.js";class C extends e.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a){}render(){const{hasError:a,error:n}=this.state,{children:r,fallback:f,renderFallback:R}=this.props;return a?R&&n?R(n):f||d.jsx("div",{role:"alert",style:{padding:"12px"},children:"Something went wrong while rendering the date picker."}):r}}C.__docgenInfo={description:"",methods:[],displayName:"SelectDatepickerErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},renderFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => React.ReactNode",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const s=t=>t.map((a,n)=>e.isValidElement(a)?e.cloneElement(a,{key:a.key??n}):a),c=t=>t?e.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},s([e.createElement("strong",null,"Selected: "),e.createElement("span",null,t.toDateString())])):null,_={title:"SelectDatepicker",component:l,parameters:{layout:"centered"}},o={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement(l,{selectedDate:t,onDateChange:n}),c(t)]))}},i={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"With Date Range"),e.createElement("p",{style:{marginBottom:"12px",color:"#555"}},"Allowed range: Jan 1, 2023 – Dec 31, 2025"),e.createElement(l,{selectedDate:t,onDateChange:n,minDate:new Date(2023,0,1),maxDate:new Date(2025,11,31)}),c(t)]))}},m={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(f=>{a(f)},[]),r={1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Custom Labels + Months (Spanish)"),e.createElement(l,{selectedDate:t,onDateChange:n,labels:{groupLabel:"Selecciona tu fecha de viaje",yearLabel:"Año",monthLabel:"Mes",dayLabel:"Día",yearPlaceholder:"Selecciona año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",months:r},order:"day/month/year"}),c(t),e.createElement("div",{style:{marginTop:"10px",color:"#555",fontSize:"13px"}},Object.values(r).join(" · "))]))}},p={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Different Order (Day/Month/Year)"),e.createElement(l,{selectedDate:t,onDateChange:n,order:"day/month/year"}),c(t)]))}},h={render:()=>{const t=new Date;return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Disabled State"),e.createElement(l,{selectedDate:t,onDateChange:()=>{},disabled:!0}),c(t)]))}},u={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Error State"),e.createElement(l,{id:"error-state",selectedDate:t,onDateChange:n,hasError:!0}),c(t)]))}},g={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Hidden Labels"),e.createElement(l,{id:"hidden-labels",selectedDate:t,onDateChange:n,hideLabels:!0}),c(t)]))}},D={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},s([e.createElement("h3",null,"Reverse Years"),e.createElement(l,{id:"reverse-years",selectedDate:t,onDateChange:n,reverseYears:!0}),c(t)]))}},x={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"440px"}},s([e.createElement("h3",null,"Smart Date Correction"),e.createElement("p",{style:{marginBottom:"12px"}},"Try selecting Jan 31, then switch month to February."),e.createElement(l,{id:"smart-correction",selectedDate:t,onDateChange:n}),c(t)]))}},S={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"460px"}},s([e.createElement("h3",null,"Range Limits"),e.createElement("p",{style:{marginBottom:"12px"}},"Range: 2020-01-01 to 2025-12-31"),e.createElement(l,{id:"range-limits",selectedDate:t,onDateChange:n,minDate:new Date(2020,0,1),maxDate:new Date(2025,11,31)}),c(t)]))}},b={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"420px"}},s([e.createElement("h3",null,"Invalid Order Fallback"),e.createElement("p",{style:{marginBottom:"12px"}},"Passing an invalid order falls back to month/day/year."),e.createElement(l,{id:"invalid-order",selectedDate:t,onDateChange:n,order:"month-year-day"}),c(t)]))}},E={render:()=>{const[t,a]=e.useState(null),n=e.useCallback(r=>{a(r)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"880px"}},s([e.createElement("h3",null,"Theming Overrides (CSS Vars)"),e.createElement("p",{style:{marginBottom:"12px"}},"These styles are applied via CSS custom properties on the root element."),e.createElement(l,{id:"theme-overrides",selectedDate:t,onDateChange:n,className:"rsd-theme-sunset"}),c(t),e.createElement("style",null,`.rsd-theme-sunset {
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
          }`)]))}},k=()=>{throw new Error("Intentional render error")},y={render:()=>d.jsxs("div",{style:{padding:"20px",maxWidth:"480px"},children:[d.jsx("h3",{children:"Error Boundary"}),d.jsx("p",{style:{marginBottom:"12px"},children:"This example intentionally throws to demonstrate the fallback UI."}),d.jsx(C,{renderFallback:t=>d.jsxs("div",{role:"alert",style:{padding:"12px",borderRadius:"8px",background:"#fff1f2",color:"#9f1239"},children:["Error: ",t.message]}),children:d.jsx(k,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    }, withKeys([React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange
    }), renderSelectedDate(selected)]));
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
    }, withKeys([React.createElement('h3', null, 'With Date Range'), React.createElement('p', {
      style: {
        marginBottom: '12px',
        color: '#555'
      }
    }, 'Allowed range: Jan 1, 2023 – Dec 31, 2025'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: new Date(2023, 0, 1),
      maxDate: new Date(2025, 11, 31)
    }), renderSelectedDate(selected)]));
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    const spanishMonths = {
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
    } as const;
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Custom Labels + Months (Spanish)'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      labels: {
        groupLabel: 'Selecciona tu fecha de viaje',
        yearLabel: 'Año',
        monthLabel: 'Mes',
        dayLabel: 'Día',
        yearPlaceholder: 'Selecciona año',
        monthPlaceholder: 'Selecciona mes',
        dayPlaceholder: 'Selecciona día',
        months: spanishMonths
      },
      order: 'day/month/year'
    }), renderSelectedDate(selected), React.createElement('div', {
      style: {
        marginTop: '10px',
        color: '#555',
        fontSize: '13px'
      }
    }, Object.values(spanishMonths).join(' · '))]));
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    }, withKeys([React.createElement('h3', null, 'Different Order (Day/Month/Year)'), React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
      order: 'day/month/year'
    }), renderSelectedDate(selected)]));
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const selectedDate = new Date();
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Disabled State'), React.createElement(SelectDatepicker, {
      selectedDate: selectedDate,
      onDateChange: () => {},
      disabled: true
    }), renderSelectedDate(selectedDate)]));
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
    }, withKeys([React.createElement('h3', null, 'Error State'), React.createElement(SelectDatepicker, {
      id: 'error-state',
      selectedDate: selected,
      onDateChange: handleDateChange,
      hasError: true
    }), renderSelectedDate(selected)]));
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
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Hidden Labels'), React.createElement(SelectDatepicker, {
      id: 'hidden-labels',
      selectedDate: selected,
      onDateChange: handleDateChange,
      hideLabels: true
    }), renderSelectedDate(selected)]));
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
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Reverse Years'), React.createElement(SelectDatepicker, {
      id: 'reverse-years',
      selectedDate: selected,
      onDateChange: handleDateChange,
      reverseYears: true
    }), renderSelectedDate(selected)]));
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
        maxWidth: '440px'
      }
    }, withKeys([React.createElement('h3', null, 'Smart Date Correction'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Try selecting Jan 31, then switch month to February.'), React.createElement(SelectDatepicker, {
      id: 'smart-correction',
      selectedDate: selected,
      onDateChange: handleDateChange
    }), renderSelectedDate(selected)]));
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    }, withKeys([React.createElement('h3', null, 'Range Limits'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Range: 2020-01-01 to 2025-12-31'), React.createElement(SelectDatepicker, {
      id: 'range-limits',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 11, 31)
    }), renderSelectedDate(selected)]));
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    }, withKeys([React.createElement('h3', null, 'Invalid Order Fallback'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Passing an invalid order falls back to month/day/year.'), React.createElement(SelectDatepicker, {
      id: 'invalid-order',
      selectedDate: selected,
      onDateChange: handleDateChange,
      order: 'month-year-day' as unknown as SelectDatepickerOrder
    }), renderSelectedDate(selected)]));
  }
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    }, withKeys([React.createElement('h3', null, 'Theming Overrides (CSS Vars)'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'These styles are applied via CSS custom properties on the root element.'), React.createElement(SelectDatepicker, {
      id: 'theme-overrides',
      selectedDate: selected,
      onDateChange: handleDateChange,
      className: 'rsd-theme-sunset'
    }), renderSelectedDate(selected), React.createElement('style', null, \`.rsd-theme-sunset {
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
          }\`)]));
  }
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const B=["Default","WithDateRange","WithCustomLabels","DifferentOrder","Disabled","WithErrorState","WithHiddenLabels","WithReverseYears","WithSmartDateCorrection","WithRangeLimits","WithInvalidOrderFallback","WithThemingOverrides","WithErrorBoundary"];export{o as Default,p as DifferentOrder,h as Disabled,m as WithCustomLabels,i as WithDateRange,y as WithErrorBoundary,u as WithErrorState,g as WithHiddenLabels,b as WithInvalidOrderFallback,S as WithRangeLimits,D as WithReverseYears,x as WithSmartDateCorrection,E as WithThemingOverrides,B as __namedExportsOrder,_ as default};
