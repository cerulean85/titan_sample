'use client';
import React, { Component } from 'react';
import { getMessages } from '@/lib/domain';
import { useRouter } from 'next/navigation'; // `useRouter`는 함수형 컴포넌트에서 사용
import { NextRouter } from 'next/router'; // `NextRouter` 타입 가져오기
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type Props = {
  router: AppRouterInstance;  // useRouter로 전달받은 router 객체
  params: { locale: string };
};

type State = {
  txt: any;
  loc: string;
  loading: boolean;
};

class BaseRenderer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      txt: null,
      loc: '',
      loading: true,
    };
  }

  // 리다이렉트 처리
  handleRedirect = () => {  
    const { router } = this.props;
    router.push('/not-found'); // locale이 유효하지 않으면 'not-found' 페이지로 리다이렉트
  };
  
  async componentDidMount() {
    try {
      const { locale } = await this.props.params;
      // locale 값이 'kr', 'en', 'cn'이 아닌 경우 'not-found' 페이지로 리다이렉트
      // if (locale !== 'ko' && locale !== 'en' && locale !== 'cn') {
      //   this.handleRedirect(); // 리다이렉트
      //   return; // 더 이상 진행하지 않음
      // }
      
      const txt = await getMessages(locale);
      this.setState({ txt, loc: locale, loading: false });
    } catch (error) {
      // this.handleRedirect();
      console.error("Error loading messages:", error);
      // 오류 처리 및 로딩 상태 유지
    }
  }

  render() {    
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    
    return this.renderContent();
  }

  renderContent() {
    // 여기에 렌더링할 실제 콘텐츠를 구현합니다.
    return <div>Locale: {this.state.loc}</div>;
  }
}

export default BaseRenderer;
