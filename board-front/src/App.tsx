import "./App.css";
import BoardEditor from "./components/BoardEditor";
import BoardFileList from "./components/BoardFileList";
import ProfileUpload from "./components/ProfileUpload";

function App() {
  const exmapleBoardId = 1; // 샘플용 게시글ID
  return (
    <div style={{ padding: 24 }}>
      <h2>프로필 업로드</h2>
      <ProfileUpload />

      <hr style={{ margin: '24px 0'}}/>

      <h2>게시글 작성 (새글)</h2>
      <BoardEditor mode="create" boardId={exmapleBoardId} onSaved={() => console.log("created")}/>
      <hr style={{ margin: '24px 0'}}/>

      <h2>게시글 편집 (첨부파일 수정 예시)</h2>
      <BoardEditor 
        mode="edit" 
        onSaved={id => console.log("saved: ",id)} 
        boardId={exmapleBoardId}
      />

      <hr style={{ margin: '24px 0'}}/>

      <h2>게시글 첨부파일 목록</h2>
      <BoardFileList boardId={exmapleBoardId} onChange={() => console.log("changed")}/>
    </div>
  )
}

export default App;
