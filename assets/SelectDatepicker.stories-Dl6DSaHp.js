import{j as u}from"./jsx-runtime-DJ2hfIpU.js";import{R as e}from"./iframe-DmVFzti6.js";import{S as m}from"./SelectDatepicker-CrjYnMVi.js";import"./preload-helper-PPVm8Dsz.js";class M extends e.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a){}render(){const{hasError:a,error:r}=this.state,{children:s,fallback:l,renderFallback:n}=this.props;return a?n&&r?n(r):l||u.jsx("div",{role:"alert",style:{padding:"12px"},children:"Something went wrong while rendering the date picker."}):s}}M.__docgenInfo={description:"",methods:[],displayName:"SelectDatepickerErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},renderFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => React.ReactNode",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const L=t=>typeof t=="number"?new Date(t):typeof t=="string"&&t.trim().length>0?new Date(t):t instanceof Date?t:null,c=t=>{if(typeof t=="number")return new Date(t);if(typeof t=="string"&&t.trim().length>0)return new Date(t);if(t instanceof Date)return t},g=t=>{const a=L(t),[r,s]=e.useState(a);return e.useEffect(()=>{t!==void 0&&s(a)},[t,a]),[r,s]},D=t=>t.map((a,r)=>e.isValidElement(a)?e.cloneElement(a,{key:a.key??r}):a),p=t=>t?e.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},D([e.createElement("strong",null,"Selected: "),e.createElement("span",null,t.toDateString())])):null,F={title:"SelectDatepicker",component:m,parameters:{layout:"centered"},args:{order:"month/day/year",reverseYears:!1,hideLabels:!1,disabled:!1,hasError:!1,labels:{},selectedDate:void 0,minDate:void 0,maxDate:void 0},argTypes:{order:{control:{type:"select"}},reverseYears:{control:"boolean"},hideLabels:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"},labels:{control:"object"},selectedDate:{control:"date"},minDate:{control:"date"},maxDate:{control:"date"},onDateChange:{table:{disable:!0}},value:{table:{disable:!0}},onChange:{table:{disable:!0}}}},b={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement(m,{...l,selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))}},y={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(x=>{d(x)},[]),i=c(r)??new Date(2023,0,1),h=c(s)??new Date(2025,11,31);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"With Date Range"),e.createElement("p",{style:{marginBottom:"12px",color:"#555"}},"Allowed range: Jan 1, 2023 – Dec 31, 2025"),e.createElement(m,{...l,selectedDate:n,onDateChange:o,minDate:i,maxDate:h}),p(n)]))}},S={render:t=>{const{selectedDate:a,labels:r,minDate:s,maxDate:l,...n}=t,[d,o]=g(a),i=e.useCallback(x=>{o(x)},[]),h={1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Custom Labels + Months (Spanish)"),e.createElement(m,{...n,selectedDate:d,onDateChange:i,minDate:c(s),maxDate:c(l),labels:{groupLabel:"Selecciona tu fecha de viaje",yearLabel:"Año",monthLabel:"Mes",dayLabel:"Día",yearPlaceholder:"Selecciona año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",months:h,...r}}),p(d),e.createElement("div",{style:{marginTop:"10px",color:"#555",fontSize:"13px"}},Object.values(h).join(" · "))]))},args:{order:"day/month/year"}},E={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Different Order (Day/Month/Year)"),e.createElement(m,{...l,selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))},args:{order:"day/month/year"}},v={render:t=>{const a=new Date,{minDate:r,maxDate:s,...l}=t;return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Disabled State"),e.createElement(m,{...l,selectedDate:a,onDateChange:()=>{},minDate:c(r),maxDate:c(s)}),p(a)]))},args:{disabled:!0}},C={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Error State"),e.createElement(m,{...l,id:"error-state",selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))},args:{hasError:!0}},f={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Hidden Labels"),e.createElement(m,{...l,id:"hidden-labels",selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))},args:{hideLabels:!0}},R={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},D([e.createElement("h3",null,"Reverse Years"),e.createElement(m,{...l,id:"reverse-years",selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))},args:{reverseYears:!0}},k={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"440px"}},D([e.createElement("h3",null,"Smart Date Correction"),e.createElement("p",{style:{marginBottom:"12px"}},"Try selecting Jan 31, then switch month to February."),e.createElement(m,{...l,id:"smart-correction",selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))}},w={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(x=>{d(x)},[]),i=c(r)??new Date(2020,0,1),h=c(s)??new Date(2025,11,31);return e.createElement("div",{style:{padding:"20px",maxWidth:"460px"}},D([e.createElement("h3",null,"Range Limits"),e.createElement("p",{style:{marginBottom:"12px"}},"Range: 2020-01-01 to 2025-12-31"),e.createElement(m,{...l,id:"range-limits",selectedDate:n,onDateChange:o,minDate:i,maxDate:h}),p(n)]))}},W={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,...l}=t,[n,d]=g(a),o=e.useCallback(i=>{d(i)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"420px"}},D([e.createElement("h3",null,"Invalid Order Fallback"),e.createElement("p",{style:{marginBottom:"12px"}},"Passing an invalid order falls back to month/day/year."),e.createElement(m,{...l,id:"invalid-order",selectedDate:n,onDateChange:o,minDate:c(r),maxDate:c(s)}),p(n)]))},args:{order:"month-year-day"}},O={render:t=>{const{selectedDate:a,minDate:r,maxDate:s,className:l,...n}=t,[d,o]=g(a),i=e.useCallback(h=>{o(h)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"880px"}},D([e.createElement("h3",null,"Theming Overrides (CSS Vars)"),e.createElement("p",{style:{marginBottom:"12px"}},"These styles are applied via CSS custom properties on the root element."),e.createElement(m,{...n,id:"theme-overrides",selectedDate:d,onDateChange:i,minDate:c(r),maxDate:c(s),className:l||"rsd-theme-aurora"}),p(d),e.createElement("style",null,`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }`)]))}},_=()=>{throw new Error("Intentional render error")},A={render:()=>u.jsxs("div",{style:{padding:"20px",maxWidth:"480px"},children:[u.jsx("h3",{children:"Error Boundary"}),u.jsx("p",{style:{marginBottom:"12px"},children:"This example intentionally throws to demonstrate the fallback UI."}),u.jsx(M,{renderFallback:t=>u.jsxs("div",{role:"alert",style:{padding:"12px",borderRadius:"8px",background:"#fff1f2",color:"#9f1239"},children:["Error: ",t.message]}),children:u.jsx(_,{})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2023, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);
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
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolvedMinDate,
      maxDate: resolvedMaxDate
    }), renderSelectedDate(selected)]));
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      labels,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
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
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate),
      labels: {
        groupLabel: 'Selecciona tu fecha de viaje',
        yearLabel: 'Año',
        monthLabel: 'Mes',
        dayLabel: 'Día',
        yearPlaceholder: 'Selecciona año',
        monthPlaceholder: 'Selecciona mes',
        dayPlaceholder: 'Selecciona día',
        months: spanishMonths,
        ...labels
      }
    }), renderSelectedDate(selected), React.createElement('div', {
      style: {
        marginTop: '10px',
        color: '#555',
        fontSize: '13px'
      }
    }, Object.values(spanishMonths).join(' · '))]));
  },
  args: {
    order: 'day/month/year'
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Different Order (Day/Month/Year)'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  },
  args: {
    order: 'day/month/year'
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const selectedDate = new Date();
    const {
      minDate,
      maxDate,
      ...rest
    } = args;
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Disabled State'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selectedDate,
      onDateChange: () => {},
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selectedDate)]));
  },
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Error State'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'error-state',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  },
  args: {
    hasError: true
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Hidden Labels'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'hidden-labels',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  },
  args: {
    hideLabels: true
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Reverse Years'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'reverse-years',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  },
  args: {
    reverseYears: true
  }
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
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
      ...rest,
      id: 'smart-correction',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2020, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);
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
      ...rest,
      id: 'range-limits',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolvedMinDate,
      maxDate: resolvedMaxDate
    }), renderSelectedDate(selected)]));
  }
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
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
      ...rest,
      id: 'invalid-order',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selected)]));
  },
  args: {
    order: 'month-year-day' as unknown as SelectDatepickerOrder
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      className,
      ...rest
    } = args;
    const [selected, setSelected] = useStoryDateState(selectedDate);
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
      ...rest,
      id: 'theme-overrides',
      selectedDate: selected,
      onDateChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate),
      className: className || 'rsd-theme-aurora'
    }), renderSelectedDate(selected), React.createElement('style', null, \`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }\`)]));
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const K=["Default","WithDateRange","WithCustomLabels","DifferentOrder","Disabled","WithErrorState","WithHiddenLabels","WithReverseYears","WithSmartDateCorrection","WithRangeLimits","WithInvalidOrderFallback","WithThemingOverrides","WithErrorBoundary"];export{b as Default,E as DifferentOrder,v as Disabled,S as WithCustomLabels,y as WithDateRange,A as WithErrorBoundary,C as WithErrorState,f as WithHiddenLabels,W as WithInvalidOrderFallback,w as WithRangeLimits,R as WithReverseYears,k as WithSmartDateCorrection,O as WithThemingOverrides,K as __namedExportsOrder,F as default};
