import sparkCore from '../../../../packages/spark-core/es5/sparkCore';
import '../../../../packages/spark-core/es5/sparkCorePolyfills';
import highlightBoard from '../../../../packages/spark-extras/components/highlight-board/es5/highlightBoard';

sparkCore({
  typeConfig: {
    familyName: '',
  },
});
highlightBoard();
